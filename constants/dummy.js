import { ImageStore } from "react-native";
import assets from "./assets";

const TripBoardData = [
  {
    id: "TRIP-01",
    name: "Paris Weekend",
    start_date : "07/17/2022",
    end_date : "07/20/2022",
    image: assets.paris,

    alerts: [
      {
        id: "Alert 1",
        message: "Martha Stewart's Lodging Poll expires soon. Vote Now!"
      },
      {
        id: "Alert 2",
        message: "A trip Location has not been decided. Explore some options!"
      }
    ],
    members: [
      {
        id: "PER-01",
        name: "Jessica Tan",
        image: assets.person02,
      },
      {
        id: "PER-02",
        name: "Jennifer Sia",
        image: assets.person03,
      }
    ],
    polls : [{
      transportation_polls: [
        {
          id: "TP-00",
          started_by: "Alexis Jordan",
          image: assets.person01,
          expires_in: '00 W 01 D 23 H',
          upvote_count: 0,
          downvote_count: 0,
          transport_details : {
            departing_time: "7:10 AM",
            lading_time: "10:10 AM",
            type: "Nonstop",
            carrier: "American Airlines",
            price: "$523.00",
          }
        },
        {
          id: "TP-01",
          started_by: "John Lenon",
          image: assets.person02,
          expires_in: '01 W 05 D 16 H',
          upvote_count: 0,
          downvote_count: 0,
          transport_details : {
            departing_time: "4:07 AM",
            lading_time: "7:10 AM",
            type: "Nonstop",
            carrier: "United Airlines",
            price: "$453.00",
          }
        }
      ],
      lodging_polls: [
        {
          id: "LO-00",
          started_by: "Martha Stewart",
          image: assets.person02,
          expires_in: '01 W 06 D 10 H',
          upvote_count: 0,
          downvote_count: 0,
          lodging_details : {
            name: "The Ritz-Carlton, Los Angeles",
            image: assets.hotel,
            location: "Downtown Los Angeles",
            description: "A sophisticated and iconic luxry oasis",
            price: "$453.00",
            total_price: "$530.00",
            ratings: "9.0/10 (455 reviews)"
          }
        }
      ],
    }],
  },
  {
    id: "TRIP-02",
    name: "Boating Trip",
    start_date : "08/07/2022",
    end_date : "08/09/2022",
    image: assets.paris,
    members: [
      {
        id: "PER-01",
        name: "Jessica Tan",
        image: assets.person02,
      },
      {
        id: "PER-02",
        name: "Jennifer Sia",
        image: assets.person03,
      }
    ],
    alerts: [
      {
        id: "Alert 1",
        message: "Martha Stewart's Lodging Poll expires soon. Vote Now!"
      },
      {
        id: "Alert 2",
        message: "A trip Location has not been decided. Explore some options!"
      }
    ],
  },
];

const Flights = [
  {
    id: "1",
    dates: "4:07 AM - 7:12 AM",
    flight_length: "6h 5m (Nonstop)",
    price : "$453",
    from_to : "NEWARK (EWR) --> Los An (LAX)",
    airline: assets.united
  },
  {
    id: "2",
    dates: "6:00 AM - 9:02 AM",
    flight_length: "6h 2m (Nonstop)",
    price : "$414",
    from_to : "NEWARK (EWR) --> Los An (LAX)",
    airline: assets.united
  },
  {
    id: "3",
    dates: "6:00 AM - 9:02 AM",
    flight_length: "6h 2m (Nonstop)",
    price : "$389",
    from_to : "NEWARK (EWR) --> Los An (LAX)",
    airline: assets.continental
  }
]

export { TripBoardData, Flights};

export { TripBoardData, Flights };