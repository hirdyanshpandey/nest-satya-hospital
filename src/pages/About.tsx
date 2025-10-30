import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Shield, Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, dignity, and respect",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of medical care and service",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all our practices",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health and well-being are at the heart of everything we do",
    },
  ];

  const facilities = [
    "50-bed capacity with modern infrastructure",
    "Advanced diagnostic equipment",
    "State-of-the-art operation theaters",
    "Economy, semi-private, and super deluxe rooms",
    "LCD and telephone in all rooms",
    "24/7 emergency services",
    "In-house pharmacy",
    "Modern laboratory facilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Nest Satya</span> Hospital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Delivering quality, affordable healthcare to the Noida community with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and high-quality healthcare services to all members of our community. We strive to deliver patient-centered care with compassion, integrity, and clinical excellence, ensuring the best possible outcomes for every individual who trusts us with their health.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading healthcare provider in the region, known for our commitment to medical excellence, innovative treatment approaches, and unwavering dedication to patient satisfaction. We envision a healthier community where quality healthcare is accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Nest Satya Hospital was established with a vision to provide comprehensive, affordable healthcare services to the residents of Noida and surrounding areas. Located in the heart of Sector 34, our facility has grown to become a trusted name in the community for quality medical care.
              </p>
              <p>
                With over 30 medical specialties and a team of more than 50 expert doctors, we offer a wide range of services including Orthopaedics, Pulmonology, Dentistry, Internal Medicine, Anesthesia, and more. Our state-of-the-art infrastructure includes modern diagnostic equipment, advanced operation theaters, and comfortable patient rooms designed to support healing and recovery.
              </p>
              <p>
                What sets us apart is our commitment to making quality healthcare accessible to everyone. We believe that financial constraints should never be a barrier to receiving proper medical attention. Our experienced and compassionate medical team works tirelessly to ensure that every patient receives personalized care and attention.
              </p>
              <p>
                Operating 24/7, our emergency services ensure that medical help is always available when you need it most. We continue to invest in the latest medical technology and training to provide the best possible outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Facilities
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
