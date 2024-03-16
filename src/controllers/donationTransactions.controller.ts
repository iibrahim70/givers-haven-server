import httpStatus from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { sendResponse } from '../utils/sendResponse';
import { DonationTransactionsServices } from '../services/donationTransactions.service';

const createDonationTransactions = catchAsync(async (req, res) => {
  const transactionData = req.body;

  const result =
    await DonationTransactionsServices.createDonationTransactionsFromDB(
      transactionData,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Donation successful',
    data: result,
  });
});

const getMonthlyTotalDonationsForYear = catchAsync(async (req, res) => {
  const { year } = req.body;

  const monthlyTotals =
    await DonationTransactionsServices.getMonthlyTotalDonationsForYearFromDB(
      year,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Donation totals for the year ${year}`,
    data: monthlyTotals,
  });
});

const getTopDonors = catchAsync(async (req, res) => {
  const result = await DonationTransactionsServices.getTopDonorsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Top donors retrieved successfully!',
    data: result,
  });
});

export const DonationTransactionsControllers = {
  createDonationTransactions,
  getMonthlyTotalDonationsForYear,
  getTopDonors,
};
