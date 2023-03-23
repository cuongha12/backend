import { Module } from '@nestjs/common';
import { CreateSocketDto } from './dto/create-socket.dto';

@Module({
  providers: [CreateSocketDto],
})
export class SocketModule {}
