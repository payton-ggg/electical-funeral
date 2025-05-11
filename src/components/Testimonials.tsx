import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "During our time of grief, the staff at Riolit Funeral Home provided exceptional care and support. They guided us through every step with compassion and professionalism.",
      author: "Sarah Johnson",
      relation: "Lost her father",
    },
    {
      quote:
        "I cannot express enough gratitude for the kindness shown by everyone at Riolit. They helped us create a beautiful service that truly honored my mother's life and legacy.",
      author: "Michael Williams",
      relation: "Lost his mother",
    },
    {
      quote:
        "The pre-planning services offered by Riolit gave our family peace of mind during a difficult time. Everything was handled with dignity and respect, just as we wished.",
      author: "Robert & Emily Davis",
      relation: "Planned ahead for parents",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-primary-800 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-700 opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-700 opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            What Families Say
          </h2>
          <p className="text-primary-100 max-w-3xl mx-auto">
            We're honored to have helped so many families through difficult
            times. Here are some of their experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote size={80} />
          </div>

          <div className="relative bg-primary-700/30 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-primary-600/30">
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-xl md:text-2xl mb-8 italic text-gray-100">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div>
                <p className="font-heading text-lg font-semibold">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-primary-200">
                  {testimonials[activeTestimonial].relation}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTestimonial === index
                      ? "bg-white w-6"
                      : "bg-primary-400 opacity-50 hover:opacity-75"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="bg-primary-600 rounded-full p-2 shadow-md text-white hover:bg-primary-500 transition-colors pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="bg-primary-600 rounded-full p-2 shadow-md text-white hover:bg-primary-500 transition-colors pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
