import amqplib, { Connection, Channel } from 'amqplib';
const rmqUser = process.env.RMQ_USER || 'guest';
const rmqPass = process.env.RMQ_PASS || 'guest';
const rmqhost = process.env.RMQ_HOST || 'localhost';

class RabbitMQConnection {
  connection!: Connection;
  channel!: Channel;
  private connected!: Boolean;
  private exchange!: string;

  constructor({ exchange }: { exchange: string }) {
    this.exchange = exchange;
  }
  async connect() {
    if (this.connected && this.channel) return;
    else this.connected = true;
    try {
      this.connection = await amqplib.connect(
        `amqp://${rmqUser}:${rmqPass}@${rmqhost}:5672/Blockx3_website`,
      );
      this.channel = await this.connection.createChannel();
      this.channel.assertExchange(this.exchange, 'fanout', {
        durable: true,
      });
      console.log(`RMQ Connected`);
    } catch (error) {
      console.error(error);
      console.error(`RMQ Connection Failed`);
    }
  }

  async SendEmailToRMQ(message: Object) {
    try {
      if (!this.channel) {
        await this.connect();
      }
      const res = this.channel.publish(this.exchange, '', Buffer.from(JSON.stringify(message)), {
        contentType: 'application/json',
      });
      if (res) {
        console.log(`Message sent to RMQ Server`);
      } else {
        console.error(`Failed to send message to RMQ Server`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const RMQClient = new RabbitMQConnection({ exchange: 'email' });
