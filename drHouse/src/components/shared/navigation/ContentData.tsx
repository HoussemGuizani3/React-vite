import hilpertonImg from '../../../images/img4.jpg';
import winterbourneImg from '../../../images/img5.jpg';
import hayMillsImg from '../../../images/img6.jpg';
import londonImg from '../../../images/img7.jpg';
import bristolImg from '../../../images/img8.jpg';
import manchesterImg from '../../../images/img9.jpg';
import { FaHouseUser } from "react-icons/fa";
import { MdLocationOn, MdOutlinePriceChange } from "react-icons/md";
import type { ReactNode } from "react";


export interface HouseLocation {
  city: string;
  state: string;
  country: string;
}

export interface House {
  id: string;
  propertyType: string;
  location: HouseLocation;
  averagePrice: number;
  currency: string;
}

export interface SearchFieldConfig {
  id: string;
  labelText: string;
  icon?: ReactNode;
  type: string;
}

export interface TextSection {
  id: number;
  title: string;
  description: string;
}

export interface ResidentProperty {
  id: number;
  price: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  id: number;
  title: string;
  description: string;
}

export interface ContentDataType {
  house: House[];
  searchFieldsConfig: SearchFieldConfig[];
  heroSection: TextSection[];
  featureSection: TextSection[];
  aboutSection: TextSection[];
  coreValuesSection: TextSection[];
  residentsSection: ResidentProperty[];
  statSection: StatItem[];
}


export const ContentData: ContentDataType = {
  house: [
    {
      id: "1",
      propertyType: "Single Family Home",
      location: {
        city: "Austin",
        state: "Texas",
        country: "USA"
      },
      averagePrice: 450000,
      currency: "USD"
    },
    {
      id: "2",
      propertyType: "Apartment / Condo",
      location: {
        city: "Miami",
        state: "Florida",
        country: "USA"
      },
      averagePrice: 320000,
      currency: "USD"
    },
    {
      id: "3",
      propertyType: "Villa",
      location: {
        city: "Los Angeles",
        state: "California",
        country: "USA"
      },
      averagePrice: 1850000,
      currency: "USD"
    },
    {
      id: "4",
      propertyType: "Townhouse",
      location: {
        city: "Atlanta",
        state: "Georgia",
        country: "USA"
      },
      averagePrice: 2850000,
      currency: "USD"
    },
    {
      id: "5",
      propertyType: "Studio",
      location: {
        city: "New York",
        state: "New York",
        country: "USA"
      },
      averagePrice: 550000,
      currency: "USD"
    }
  ],
  searchFieldsConfig: [
    {
      id: "property-type-field",
      labelText: "PROPERTY TYPE",
      icon: <FaHouseUser color="white" />,
      type: "propertyType"
    },
    {
      id: "location-field",
      labelText: "LOCATION",
      icon: <MdLocationOn color="white" />,
      type: "location"
    },
    {
      id: "price-field",
      labelText: "AVERAGE PRICE",
      icon: <MdOutlinePriceChange color="white" />,
      type: "price"
    }
  ],
  heroSection: [
    {
      id: 1,
      title: 'Discover Houses Of Your Choice',
      description: 'Explore premium residential options effortlessly. We connect you with verified properties to make your home-buying journey simple and secure.'
    }
  ],
  featureSection: [
    {
      id: 1,
      title: 'Find your dream home',
      description: 'Discover top-tier properties on the market using our advanced filtering system designed to match your specific lifestyle and budget.'
    },
    {
      id: 2,
      title: 'Best quality guarantee',
      description: 'Every property listed undergoes rigorous inspection and verification to ensure it meets high standards of structural and legal quality.'
    },
    {
      id: 3,
      title: '100% Safe Transactions',
      description: 'Seamless financial processes with end-to-end security, ensuring your real estate investments are fully protected at every stage.'
    },
    {
      id: 4,
      title: '24Hrs Consultation',
      description: 'Our team of real estate experts is available round-the-clock to answer your inquiries and provide personalized advisory services.'
    }
  ],
  aboutSection: [
    {
      id: 1,
      title: 'About Us',
      description: 'We are a leading real estate platform dedicated to transforming property trading. By combining industry expertise with innovative technology, we empower clients to buy, sell, and invest with confidence.'
    }
  ],
  coreValuesSection: [
    {
      id: 1,
      title: 'Core Values',
      description: 'Transparency, integrity, and client satisfaction drive everything we do. We strive to build lasting trust by delivering clear guidance and exceptional value in every market segment.'
    }
  ],
  residentsSection: [
    {
      id: 1,
      price: '120,000',
      title: 'Hilperton, UK',
      description: 'Charming modern residence located in a peaceful countryside setting.',
      image: hilpertonImg
    },
    {
      id: 2,
      price: '150,000',
      title: 'Winterbourne, UK',
      description: 'Elegant family home offering spacious living areas and private gardens.',
      image: winterbourneImg
    },
    {
      id: 3,
      price: '185,000',
      title: 'Hay Mills, UK',
      description: 'Contemporary urban house positioned close to primary city amenities.',
      image: hayMillsImg
    },
    {
      id: 4,
      price: '210,000',
      title: 'London, UK',
      description: 'Luxury metropolitan apartment situated in a highly sought-after district.',
      image: londonImg
    },
    {
      id: 5,
      price: '135,000',
      title: 'Bristol, UK',
      description: 'Stylish architectural design complete with eco-friendly features.',
      image: bristolImg
    },
    {
      id: 6,
      price: '165,000',
      title: 'Manchester, UK',
      description: 'Prime residential location providing convenient access to business hubs.',
      image: manchesterImg
    }
  ],
  statSection: [
    {
      id: 1,
      title: '8K+',
      description: 'Solid Houses'
    },
    {
      id: 2,
      title: '2K+',
      description: 'Satisfied clients'
    },
    {
      id: 3,
      title: '50+',
      description: 'Cities Covered'
    },
    {
      id: 4,
      title: '25+',
      description: 'Award Winning'
    }
  ]
};
