// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Calendar, Users, Home, CreditCard, User, Mail, Phone } from 'lucide-react';

// const BookingForm = () => {
//   const [step, setStep] = useState(1);
//   const [bookingData, setBookingData] = useState({
//     property: '',
//     checkIn: '',
//     checkOut: '',
//     guests: '',
//     name: '',
//     email: '',
//     phone: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Booking submitted:', bookingData);
//     // Handle booking submission here
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setBookingData({
//       ...bookingData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Complete Your Booking
//           </h2>
//           <div className="flex justify-center items-center space-x-4 mb-8">
//             {[1, 2, 3].map((num) => (
//               <div key={num} className="flex items-center">
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
//                     step >= num
//                       ? "bg-[var(--color-electric-500)] text-white"
//                       : "bg-gray-300 text-gray-600"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 3 && (
//                   <div
//                     className={`w-12 h-1 mx-2 ${
//                       step > num
//                         ? "bg-[var(--color-electric-500)]"
//                         : "bg-gray-300"
//                     }`}
//                   ></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-2xl p-8 animate-scale-in">
//           <form onSubmit={handleSubmit}>
//             {/* Step 1: Property & Dates */}
//             {step === 1 && (
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">
//                   Property & Dates
//                 </h3>

//                 <div className="relative">
//                   <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-electric-500)] w-5 h-5" />
//                   <select
//                     name="property"
//                     value={bookingData.property}
//                     onChange={handleChange}
//                     className="pl-10 h-12 w-full bg-white/70 border border-white/60 rounded-lg focus:border-[var(--color-electric-400)] focus:outline-none"
//                     required
//                   >
//                     <option value="">Select Property</option>
//                     <option value="modern-studio-london">
//                       Modern Studio - London
//                     </option>
//                     <option value="shared-flat-manchester">
//                       Shared Flat - Manchester
//                     </option>
//                     <option value="deluxe-room-birmingham">
//                       Deluxe Room - Birmingham
//                     </option>
//                     <option value="penthouse-edinburgh">
//                       Penthouse - Edinburgh
//                     </option>
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral-500 w-5 h-5" />
//                     <Input
//                       type="date"
//                       name="checkIn"
//                       placeholder="Check-in Date"
//                       value={bookingData.checkIn}
//                       onChange={handleChange}
//                       className="pl-10 h-12 bg-white/70 border-white/60 focus:border-[var(--color-coral-400)]"
//                       required
//                     />
//                   </div>

//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5" />
//                     <Input
//                       type="date"
//                       name="checkOut"
//                       placeholder="Check-out Date"
//                       value={bookingData.checkOut}
//                       onChange={handleChange}
//                       className="pl-10 h-12 bg-white/70 border-white/60 focus:border-lime-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
//                   <Input
//                     type="number"
//                     name="guests"
//                     placeholder="Number of Guests"
//                     value={bookingData.guests}
//                     onChange={handleChange}
//                     className="pl-10 h-12 bg-white/70 border-white/60 focus:border-amber-400"
//                     min="1"
//                     required
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Personal Information */}
//             {step === 2 && (
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">
//                   Personal Information
//                 </h3>

//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-500 w-5 h-5" />
//                   <Input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={bookingData.name}
//                     onChange={handleChange}
//                     className="pl-10 h-12 bg-white/70 border-white/60 focus:border-electric-400"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral-500 w-5 h-5" />
//                   <Input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={bookingData.email}
//                     onChange={handleChange}
//                     className="pl-10 h-12 bg-white/70 border-white/60 focus:border-coral-400"
//                     required
//                   />
//                 </div>

//                 <div className="relative">
//                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5" />
//                   <Input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={bookingData.phone}
//                     onChange={handleChange}
//                     className="pl-10 h-12 bg-white/70 border-white/60 focus:border-lime-400"
//                     required
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Payment */}
//             {step === 3 && (
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">
//                   Payment Details
//                 </h3>

//                 <div className="relative">
//                   <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-500 w-5 h-5" />
//                   <Input
//                     type="text"
//                     name="cardNumber"
//                     placeholder="Card Number"
//                     value={bookingData.cardNumber}
//                     onChange={handleChange}
//                     className="pl-10 h-12 bg-white/70 border-white/60 focus:border-electric-400"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-6">
//                   <Input
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YY"
//                     value={bookingData.expiryDate}
//                     onChange={handleChange}
//                     className="h-12 bg-white/70 border-white/60 focus:border-coral-400"
//                     required
//                   />

//                   <Input
//                     type="text"
//                     name="cvv"
//                     placeholder="CVV"
//                     value={bookingData.cvv}
//                     onChange={handleChange}
//                     className="h-12 bg-white/70 border-white/60 focus:border-lime-400"
//                     required
//                   />
//                 </div>

//                 <div className="bg-gradient-to-r from-electric-50 to-lime-50 p-6 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-2">
//                     Booking Summary
//                   </h4>
//                   <div className="space-y-2 text-sm text-gray-600">
//                     <div className="flex justify-between">
//                       <span>Property:</span>
//                       <span>{bookingData.property || "Not selected"}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Dates:</span>
//                       <span>
//                         {bookingData.checkIn || "Not selected"} -{" "}
//                         {bookingData.checkOut || "Not selected"}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Guests:</span>
//                       <span>{bookingData.guests || "Not specified"}</span>
//                     </div>
//                     <div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
//                       <span>Total Amount:</span>
//                       <span>£1,200</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//               {step > 1 && (
//                 <Button
//                   type="button"
//                   onClick={handleBack}
//                   className="h-12 bg-gray-500 hover:bg-gray-600 text-white px-8 rounded-lg"
//                 >
//                   Back
//                 </Button>
//               )}

//               {step < 3 ? (
//                 <Button
//                   type="button"
//                   onClick={handleNext}
//                   className="h-12 bg-gradient-to-r from-[var(--color-electric-500)]  to-[var(--color-coral-500)] hover:from-[var(--color-electric-600)] hover:to-[var(--color-coral-600)] text-white px-8 rounded-lg ml-auto"
//                 >
//                   Next
//                 </Button>
//               ) : (
//                 <Button
//                   type="submit"
//                   className="h-12 bg-gradient-to-r from-lime-500 to-[var(--color-electric-500)] hover:from-lime-600 hover:to-[var(--color-electric-600)] text-white px-8 rounded-lg ml-auto"
//                 >
//                   Complete Booking
//                 </Button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;
'use client';

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  CreditCard,
  User,
  Mail,
  Phone,
  Shield,
} from "lucide-react";

interface BookingData {
  property: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const properties = [
    {
      id: "grand-hotel",
      name: "Grand Hotel Downtown",
      price: 250,
      rating: 4.8,
    },
    { id: "ocean-resort", name: "Ocean View Resort", price: 180, rating: 4.6 },
    {
      id: "mountain-lodge",
      name: "Mountain Peak Lodge",
      price: 320,
      rating: 4.9,
    },
    { id: "city-suites", name: "City Center Suites", price: 200, rating: 4.5 },
  ];

  const handleInputChange = (
    field: keyof BookingData,
    value: string | number
  ) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const start = new Date(bookingData.checkIn);
      const end = new Date(bookingData.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const getSelectedProperty = () => {
    return properties.find((p) => p.id === bookingData.property);
  };

  const calculateTotal = () => {
    const property = getSelectedProperty();
    const nights = calculateNights();
    if (property && nights) {
      const subtotal = property.price * nights;
      const taxes = subtotal * 0.12;
      return { subtotal, taxes, total: subtotal + taxes };
    }
    return { subtotal: 0, taxes: 0, total: 0 };
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    alert("Booking confirmed! You will receive a confirmation email shortly.");
    console.log("Booking Data:", bookingData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Book Your Perfect Stay
          </h1>
          <p className="text-gray-600">
            Find and book amazing accommodations worldwide
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= i
                      ? "bg-[var(--color-electric-500)] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {i}
                </div>
                {i < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > i
                        ? "bg-[var(--color-electric-500)]"
                        : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-2 space-x-8">
            <span className="text-sm text-gray-600">Search & Select</span>
            <span className="text-sm text-gray-600 pl-4">Guest Details</span>
            <span className="text-sm text-gray-600">Payment & Summary</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Step 1: Property Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Choose Your Destination
                  </h2>

                  {/* Property Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Select Property
                    </label>
                    <select
                      value={bookingData.property}
                      onChange={(e) =>
                        handleInputChange("property", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent text-gray-700"
                    >
                      <option value="">Choose a property...</option>
                      {properties.map((property) => (
                        <option key={property.id} value={property.id}>
                          {property.name} - ${property.price}/night (★{" "}
                          {property.rating})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) =>
                          handleInputChange("checkIn", e.target.value)
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring--[var(--color-electric-400)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) =>
                          handleInputChange("checkOut", e.target.value)
                        }
                        min={
                          bookingData.checkIn ||
                          new Date().toISOString().split("T")[0]
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Number of Guests
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) =>
                        handleInputChange("guests", parseInt(e.target.value))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Guest Information
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Payment Details
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <CreditCard className="inline w-4 h-4 mr-2" />
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={bookingData.cardNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "cardNumber",
                          formatCardNumber(e.target.value)
                        )
                      }
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={bookingData.expiryDate}
                        onChange={(e) =>
                          handleInputChange("expiryDate", e.target.value)
                        }
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={bookingData.cvv}
                        onChange={(e) =>
                          handleInputChange("cvv", e.target.value)
                        }
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={bookingData.cardName}
                      onChange={(e) =>
                        handleInputChange("cardName", e.target.value)
                      }
                      placeholder="Name on card"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-electric-400)] focus:border-transparent"
                    />
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 text-sm font-medium">
                        Your payment information is secure and encrypted
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    step === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-500 text-white hover:bg-gray-600"
                  }`}
                >
                  Previous
                </button>
                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-[var(--color-electric-500)] to-[var(--color-coral-500)] hover:from-[var(--color-electric-600)] hover:to-[var(--color-coral-600)] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-[var(--color-electric-500)] hover:from-green-600 hover:to-[var(--color-electric-600)] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    Complete Booking
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar - Only show on step 3 */}
          {step === 3 && (
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Booking Summary
                </h3>

                {bookingData.property && (
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-800">
                        {getSelectedProperty()?.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        ★ {getSelectedProperty()?.rating} rating
                      </p>
                    </div>

                    {bookingData.checkIn && bookingData.checkOut && (
                      <div className="border-b pb-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Check-in:</span>
                          <span className="font-medium">
                            {new Date(bookingData.checkIn).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Check-out:</span>
                          <span className="font-medium">
                            {new Date(
                              bookingData.checkOut
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Nights:</span>
                          <span className="font-medium">
                            {calculateNights()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Guests:</span>
                          <span className="font-medium">
                            {bookingData.guests}
                          </span>
                        </div>
                      </div>
                    )}

                    {calculateNights() > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="font-medium">
                            ${calculateTotal().subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Taxes & Fees:</span>
                          <span className="font-medium">
                            ${calculateTotal().taxes.toFixed(2)}
                          </span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between">
                            <span className="font-bold text-lg text-gray-800">
                              Total:
                            </span>
                            <span className="font-bold text-lg text-blue-600">
                              ${calculateTotal().total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {!bookingData.property && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">
                      Select a property to see booking details
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
