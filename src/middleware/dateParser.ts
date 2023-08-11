import { Request, Response, NextFunction } from 'express';

const dateParser = (req: Request, res: Response, next: NextFunction) => {
  const dateString: string | undefined | null = req.body.dob;

  // If dob is not sent in request body
  if (dateString == undefined) {
    next();
  }
  else {
    const dateComponents = dateString.split('/');

    if (dateComponents.length !== 3) {
      // Invalid format
      return res.status(400).json({ success: false, message: 'Invalid Date Format. The date should be in DD/MM/YYYY format' });
    }

    const day = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]) - 1; // Months are zero-based in JavaScript Date
    const year = parseInt(dateComponents[2]);
    console.log(day, month, year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // Invalid component values
      return res.status(400).json({ success: false, message: 'Invalid Date Format. The date should be in DD/MM/YYYY format' });
    }

    const parsedDate = new Date(Date.UTC(year, month, day, 0, 0, 0));
    console.log(parsedDate);


    // Check if the parsed date is valid
    if (isNaN(parsedDate.getTime())) {
      // Invalid date
      return res.status(400).json({ success: false, message: 'Invalid Date!' });
    }

    req.body.dob = parsedDate;
    next();
  }
}

export default dateParser;