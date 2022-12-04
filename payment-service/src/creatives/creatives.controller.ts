import { Controller, Get, Inject } from '@nestjs/common';
import { STRIPE_CLIENT } from 'src/stripe/constants';
import { Stripe } from 'stripe';

@Controller('creatives')
export class CreativesController {
  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) {}

  @Get('/')
  listCreatives() {
    return this.stripe.customers.list();
  }
}
