import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { CreativesModule } from './creatives/creatives.module';

@Module({
  imports: [
    StripeModule.forRoot(process.env.STRIPE_API_KEY, {
      apiVersion: '2020-08-27',
    }),
    CreativesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
