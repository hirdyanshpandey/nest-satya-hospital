import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Clock, Phone } from "lucide-react";

const Doctors = () => {
  const departments = [
    {
      name: "Orthopaedics",
      specialists: "10+ Specialists",
      description: "Expert bone and joint care specialists",
      expertise: ["Joint Replacement", "Fracture Management", "Sports Medicine", "Spine Surgery"],
    },
    {
      name: "Pulmonology",
      specialists: "5+ Specialists",
      description: "Respiratory and lung care experts",
      expertise: ["Asthma Care", "COPD Treatment", "Critical Care", "Sleep Medicine"],
    },
    {
      name: "Dentistry",
      specialists: "8+ Dentists",
      description: "Complete dental care professionals",
      expertise: ["Cosmetic Dentistry", "Orthodontics", "Oral Surgery", "Implants"],
    },
    {
      name: "Internal Medicine",
      specialists: "12+ Physicians",
      description: "General medicine and chronic disease management",
      expertise: ["Diabetes Care", "Cardiology", "Gastroenterology", "Nephrology"],
    },
    {
      name: "Cardiology",
      specialists: "6+ Cardiologists",
      description: "Heart and vascular care specialists",
      expertise: ["Interventional Cardiology", "Cardiac Imaging", "Preventive Cardiology"],
    },
    {
      name: "Neurology",
      specialists: "4+ Neurologists",
      description: "Brain and nervous system specialists",
      expertise: ["Stroke Care", "Epilepsy", "Movement Disorders", "Headache Management"],
    },
    {
      name: "Pediatrics",
      specialists: "8+ Pediatricians",
      description: "Child healthcare specialists",
      expertise: ["Neonatology", "Vaccinations", "Growth & Development", "Child Nutrition"],
    },
    {
      name: "Ophthalmology",
      specialists: "5+ Eye Specialists",
      description: "Eye care and vision specialists",
      expertise: ["Cataract Surgery", "LASIK", "Retinal Care", "Glaucoma Treatment"],
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Highly Qualified",
      description: "MBBS, MD/MS, and specialized fellowships from premier institutions",
    },
    {
      icon: GraduationCap,
      title: "Experienced Team",
      description: "10-30+ years of clinical experience in respective specialties",
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Round-the-clock availability for emergencies and consultations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Expert <span className="text-primary">Medical Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              50+ highly qualified and experienced doctors across 30+ specialties, dedicated to your health and well-being
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Departments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized care from our team of expert doctors across various medical disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{dept.name}</h3>
                      <p className="text-secondary font-semibold text-sm">{dept.specialists}</p>
                    </div>
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">{dept.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Areas of Expertise:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {dept.expertise.map((exp, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-secondary rounded-full"></div>
                          <span className="text-muted-foreground">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Choose Our Doctors
            </h2>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Nest Satya Hospital, our team of over 50 expert doctors represents the finest medical talent in the region. Each specialist brings years of clinical experience, advanced training from premier medical institutions, and a commitment to patient-centered care.
                  </p>
                  <p>
                    Our doctors stay current with the latest medical advances through continuous education and training programs. They combine clinical expertise with compassionate care, taking time to listen to patients, explain diagnoses clearly, and involve families in treatment decisions.
                  </p>
                  <p>
                    Whether you need routine care or treatment for complex conditions, our multidisciplinary team works collaboratively to provide comprehensive, coordinated healthcare. We believe in treating the whole person, not just the condition, with dignity and respect.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Board Certified</p>
                        <p className="text-sm">All doctors hold relevant board certifications and licenses</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Patient-Focused</p>
                        <p className="text-sm">Committed to personalized care and patient satisfaction</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Multidisciplinary Care</p>
                        <p className="text-sm">Collaborative approach for comprehensive treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Latest Technology</p>
                        <p className="text-sm">Access to advanced diagnostic and treatment equipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Consult Our Expert Doctors
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Book an appointment with our specialists for personalized medical care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+911204107777">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 120-410-7777
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
