import { Module } from '@nestjs/common';

import { BankAccountsModule } from '@modules/bank-accounts/bank-accounts.module';
import { CategoriesModule } from '@modules/categories/categories.module';

import { TransactionsService } from './services/transactions.service';
import { ValidateTransactionOwnerShipService } from './services/validate-transaction-ownership.service';
import { TransactionsController } from './transactions.controller';

@Module({
  imports: [BankAccountsModule, CategoriesModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnerShipService],
})
export class TransactionsModule {}
