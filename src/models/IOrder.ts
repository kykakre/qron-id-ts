export interface IOrder {
  id: number;
  sellerId: number;
  purchaseDate?: string;
  purchaseSum: number;
  ipAddress?: string;
  externalPaymentId?: string;
  paymentStatus: paymentStatusList;
  receiptUrl?: string;
  auxiliaryPaymentData?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  comment?: string;
  sellerExternalId?: string;
  email?: string;
  sendedEmail: boolean;
  sendedGetCourse?: boolean;
  paymentMethod: paymentMethodList;
  additionalDesignationData?: string;
  processedTimes?: number;
  externalFormId?: number;
  serviceId?: number;
  service: Service[];
}
interface Service {
  serviceId: number;
  serviceName?: string;
  anableToSplitService?: AnableToSplitService[];
  sellerServices?: SellerServices[];
}
interface AnableToSplitService {
  id: number;
  fullName?: string;
  shortName?: string;
  phone?: string;
  activityTypeId: number;
  taxpayerIdentificationNumber?: string;
  primaryStateRegistrationNumber: string;
  oldPostalAddress?: string;
  designation?: string;
  logoUrl?: string;
  applePaySellerIdentifier?: string;
  applePayPathCertificate?: string;
  applePayPasswordCertificate?: string;
  legalDistrict?: string;
  legalIndex?: string;
  legalLocality?: string;
  legalAddress?: string;
  legalRegion?: string;
  oldLegalAddress?: string;
  postalIndex?: string;
  postalRegion?: string;
  postalDistrict?: string;
  postalLocality?: string;
  postalAddress?: string;
  nonCashPayments: boolean;
  cashPayments: boolean;
  employeeEligibleToSignSecondName?: string;
  employeeEligibleToSignFirstName?: string;
  employeeEligibleToSignMiddleName?: string;
  employeeEligibleToSignFullName?: string;
  employeeEligibleToSignPosition?: string;
  employeeEligibleToSignActsOnBasis?: string;
  contactPersonForAccessPersonalAccountFullName?: string;
  contactPersonForAccessPersonalAccountPhone?: string;
  contactPersonForAccessPersonalAccountEmail?: string;
  contactPersonForAccessPersonalAccountPosition?: string;
  contactPersonForGeneralQuestionsFullName?: string;
  contactPersonForGeneralQuestionsPhone?: string;
  contactPersonForGeneralQuestionsEmail?: string;
  contactPersonForFinancialQuestionsFullName?: string;
  contactPersonForFinancialQuestionsPhone?: string;
  contactPersonForFinancialQuestionsEmail?: string;
  contactPersonForTechnicalQuestionsFullName?: string;
  contactPersonForTechnicalQuestionsPhone?: string;
  contactPersonForTechnicalQuestionsEmail?: string;
  parentId?: number;
  percentageDeductions?: number;
  bankName?: string;
  bankIdentificationCode?: string;
  bankCorrespondentAccount?: string;
  bankSettlementAccount?: string;
  referalId?: number;
  referalLevel: referalLevelList;
  registerDate: string;
  investmentsFromReferalsForCurrentMonth: number;
  myInvestmentsForCurrentMonth: number;
}
interface SellerServices {
  id: number;
  sellerId: number;
  serviceId: number;
  dividePircent?: number;
}
enum paymentStatusList {
  Created,
  Paid,
  Canceled,
  ForvardBack,
}
enum paymentMethodList {
  Card,
  GooglePay,
  ApplePay,
}

enum referalLevelList {
  FirstLevel,
  SecondLevel,
  ThirdLevel,
}
