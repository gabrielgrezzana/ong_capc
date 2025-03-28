export type RootStackParamList = {
  Home: undefined;
  Activities: undefined;
  Suppliers: undefined;
  Mission: undefined;
  Photos: undefined;
  History: undefined;
  AboutUs: undefined;
  Networks: undefined;
  Testimonials: undefined;
  AboutCancer: undefined;
};

// Extendendo os tipos do React Navigation
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
