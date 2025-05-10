import React from "react";
import { Users, Award, Home, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-texture"></div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 fade-in">
            About Riolit Funeral Home
          </h1>
          <p
            className="text-xl text-primary-100 max-w-3xl fade-in"
            style={{ animationDelay: "200ms" }}
          >
            A tradition of compassionate care and dignified service since 1985.
          </p>
        </div>
      </section>

      {/* Our History */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="section-title">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1985 by Robert and Elizabeth Riolit, our funeral home
                began with a simple mission: to provide compassionate,
                personalized funeral services that honor the memory of loved
                ones with dignity and respect.
              </p>
              <p className="text-gray-700 mb-4">
                For over 35 years, we have remained a family-owned and operated
                business, maintaining the same values and commitment to
                excellence that guided our founders. Now under the leadership of
                the second generation, we continue to uphold our tradition of
                exceptional service.
              </p>
              <p className="text-gray-700">
                Throughout our history, we've been privileged to serve thousands
                of families during their time of loss, building a reputation for
                compassionate care and professional service in our community.
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

      {/* Our Values */}
      <section className="section bg-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 bg-texture"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              Our approach to funeral service is guided by these core
              principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                <Heart
                  size={32}
                  className="text-primary-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Compassion
              </h3>
              <p className="text-gray-700">
                We approach every family with genuine empathy and understanding,
                recognizing that each person's grief journey is unique. Our team
                provides a comforting presence and a listening ear during
                difficult times.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-6">
                <Award
                  size={32}
                  className="text-accent-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Dignity
              </h3>
              <p className="text-gray-700">
                We honor each life with respect and reverence, ensuring that
                every service is conducted with the highest level of
                professionalism and attention to detail. We believe that
                everyone deserves a dignified farewell.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 mb-6">
                <Users
                  size={32}
                  className="text-secondary-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Personalization
              </h3>
              <p className="text-gray-700">
                We believe that each service should be as unique as the life it
                celebrates. Our team works closely with families to create
                meaningful tributes that reflect the personality, interests, and
                legacy of their loved ones.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-soft slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                <Home
                  size={32}
                  className="text-primary-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Community
              </h3>
              <p className="text-gray-700">
                As a locally owned business, we are deeply connected to our
                community. We are committed to serving families of all
                backgrounds, beliefs, and traditions, and we actively support
                local organizations that provide comfort and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet our dedicated staff of compassionate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="slide-up">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Michael Riolit"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-1">
                  Michael Riolit
                </h3>
                <p className="text-primary-600 mb-4">
                  Funeral Director & Owner
                </p>
                <p className="text-gray-700">
                  With over 20 years of experience, Michael leads our team with
                  compassion and professionalism, continuing the legacy his
                  parents began.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="slide-up" style={{ animationDelay: "100ms" }}>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5668893/pexels-photo-5668893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Jennifer Casey"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-1">
                  Jennifer Casey
                </h3>
                <p className="text-primary-600 mb-4">Funeral Director</p>
                <p className="text-gray-700">
                  Jennifer brings warmth and understanding to her role, helping
                  families create meaningful tributes for their loved ones.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="slide-up" style={{ animationDelay: "200ms" }}>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="David Martinez"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-1">
                  David Martinez
                </h3>
                <p className="text-primary-600 mb-4">
                  Grief Support Coordinator
                </p>
                <p className="text-gray-700">
                  David coordinates our aftercare and grief support programs,
                  providing resources and guidance to families throughout their
                  grieving process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-subtitle">
              Our funeral home is designed to provide a peaceful, comforting
              environment for families and guests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="slide-up">
              <div className="rounded-lg overflow-hidden shadow-soft mb-6">
                <img
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Chapel"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">
                Chapel
              </h3>
              <p className="text-gray-700">
                Our spacious chapel accommodates up to 200 guests and features
                beautiful stained glass, comfortable seating, and
                state-of-the-art audio-visual capabilities for personalized
                tributes.
              </p>
            </div>

            <div className="slide-up" style={{ animationDelay: "200ms" }}>
              <div className="rounded-lg overflow-hidden shadow-soft mb-6">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Reflection Garden"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">
                Reflection Garden
              </h3>
              <p className="text-gray-700">
                Our landscaped outdoor garden provides a serene space for quiet
                reflection, featuring a tranquil fountain, peaceful seating
                areas, and beautiful seasonal plantings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
