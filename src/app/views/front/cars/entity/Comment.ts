
export interface Comment {
    _id?: string; // Make _id optional
    user: any; // Update the type based on your actual user type
    car: any; // Update the type based on your actual car type
    content: string;
    datecreation: Date;
  }
  