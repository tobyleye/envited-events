export type event = {
    name: string;
    hostname: string;
    startDate: string;
    endDate: string;
    location: {
      street: string;
      suburb: string;
      state: string;
      postcode: string;
    };
    photo: File|null;
  };
  