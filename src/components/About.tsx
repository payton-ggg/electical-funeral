import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-primary-900">
              Our History
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 1985 by Robert and Elizabeth Riolit, our funeral home
              began with a simple mission: to provide compassionate,
              personalized funeral services that honor the memory of loved ones
              with dignity and respect.
            </p>
            <p className="text-gray-700">
              For over 35 years, we have remained a family-owned and operated
              business, maintaining the same values and commitment to excellence
              that guided our founders. Throughout our history, we've been
              privileged to serve thousands of families during their time of
              loss, building a reputation for compassionate care and
              professional service in our community.
            </p>
          </div>

          <div className="slide-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden h-[400px]">
                <img
                  src="https://images.pexels.com/photos/3591076/pexels-photo-3591076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Historic photo of Riolit Funeral Home"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary-100 rounded-lg z-[-1]"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-accent-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
