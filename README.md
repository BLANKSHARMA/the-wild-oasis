# Hotel Management System

---

Preview- https://the-wild-oasis-hotel-tool.netlify.app

---

## Description

This project is a Hotel Management System that provides a user-friendly interface for hotel employees to manage cabin rentals, bookings, guest information, and important statistics, ensuring a seamless experience for both the staff and guests.

## Features

- **Cabin Management**:

  - Cabins cannot be deleted if occupied by guests.
  - View, update, delete, and create new cabins.
  - Cabin details include photo, name, capacity, price, and discount.

- **User Management**:

  - Exclusive signup within the application for hotel employees.
  - User profile customization (avatar, name, password).

- **Booking Management**:

  - Display all bookings with arrival and departure dates, status, and paid amount.
  - Filter bookings by status (unconfirmed, checked in, checked out).
  - Manage check-ins, check-outs, and deletion of bookings.
  - Accept and confirm payments on check-in.
  - Option for guests to add breakfast during their stay.
  - Guest information includes full name, email, ID, nationality, and country flag.

- **Dashboard**:

  - Displays vital information for the last 7, 30, or 90 days.
  - Lists guests checking in/out on the current day.
  - Provides statistics on bookings, sales, check-ins, and occupancy rate.
  - Charts for daily hotel sales, stay durations, and extras sales (e.g., breakfast).

- **Settings**:
  - Customizable application-wide settings for breakfast price, booking constraints, and dark mode.

## Technology Stack

- **Frontend**:
  - Routing: React Router
  - Styling: Styled Components
  - Remote State Management: Supabase
  - UI State Management: Context API
  - Form Management: React Hook Form
  - Other Tools: React Icons, React Hot Toast, Recharts, Date-fns

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the required environment variables.
4. Start the application using `npm start`.

## How to Use

1. Sign up with valid hotel employee credentials.
2. Navigate through the dashboard, cabin, and booking sections.
3. Manage cabins, bookings, and user profiles.
4. Utilize the dashboard for key metrics and statistics.

## Contributing

If you want to contribute or provide feedback, please open an issue or create a pull request.

---

This Readme provides an overview of the Hotel Management System, its features, technologies used, installation guide, and a brief guide on usage. Feel free to tailor and expand upon this structure to fit your project's specifics and audience needs.
