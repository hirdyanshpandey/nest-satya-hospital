import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Bone,
  Wind,
  Smile,
  Activity,
  Heart,
  Brain,
  Eye,
  Baby,
  Pill,
  Syringe,
  Microscope,
  Stethoscope,
  Ambulance,
  BedDouble,
  HeartPulse,
  TestTube,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Bone,
      title: "Orthopaedics",
      description: "Comprehensive bone, joint, and musculoskeletal care including fracture management, joint replacement surgery, sports injuries, and spine disorders. Our orthopaedic specialists use advanced techniques for optimal outcomes.",
      features: ["Joint Replacement", "Fracture Management", "Sports Injuries", "Spine Care"],
    },
    {
      icon: Wind,
      title: "Pulmonology",
      description: "Expert respiratory care for conditions like asthma, COPD, pneumonia, tuberculosis, and sleep disorders. Advanced diagnostic facilities including spirometry and bronchoscopy available.",
      features: ["Asthma Treatment", "COPD Management", "Sleep Studies", "Bronchoscopy"],
    },
    {
      icon: Smile,
      title: "Dentistry",
      description: "Complete dental care from preventive dentistry to complex procedures including root canal treatment, dental implants, cosmetic dentistry, and orthodontics.",
      features: ["Preventive Care", "Root Canal", "Dental Implants", "Cosmetic Dentistry"],
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Comprehensive diagnosis and treatment for adult diseases including diabetes, hypertension, infectious diseases, and chronic conditions with a holistic approach.",
      features: ["Diabetes Care", "Hypertension", "Infectious Diseases", "Preventive Medicine"],
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced cardiac care including diagnosis and treatment of heart diseases, ECG, echocardiography, and cardiac rehabilitation programs.",
      features: ["ECG", "Echocardiography", "Cardiac Screening", "Heart Disease Management"],
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert care for neurological disorders including stroke, epilepsy, headaches, Parkinson's disease, and nerve disorders.",
      features: ["Stroke Care", "Epilepsy Treatment", "Headache Management", "Nerve Disorders"],
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Comprehensive eye care services including cataract surgery, glaucoma treatment, retinal disorders, and vision correction.",
      features: ["Cataract Surgery", "Glaucoma Care", "Retinal Treatment", "Vision Testing"],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Complete healthcare for infants, children, and adolescents including vaccinations, growth monitoring, and treatment of childhood illnesses.",
      features: ["Vaccinations", "Growth Monitoring", "Newborn Care", "Child Health"],
    },
  ];

  const supportServices = [
    {
      icon: Ambulance,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services with trained staff and ambulance facilities",
    },
    {
      icon: Microscope,
      title: "Pathology Lab",
      description: "Advanced diagnostic laboratory with quick and accurate test results",
    },
    {
      icon: TestTube,
      title: "Radiology",
      description: "Modern imaging services including X-ray, ultrasound, and other diagnostics",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "In-house pharmacy stocked with essential medications and medical supplies",
    },
    {
      icon: BedDouble,
      title: "Inpatient Care",
      description: "Comfortable rooms with modern amenities for patient recovery",
    },
    {
      icon: HeartPulse,
      title: "ICU/Critical Care",
      description: "Advanced intensive care unit for critically ill patients",
    },
    {
      icon: Syringe,
      title: "Anesthesia",
      description: "Expert anesthesia services for surgeries and procedures",
    },
    {
      icon: Stethoscope,
      title: "General Surgery",
      description: "Comprehensive surgical services with modern operation theaters",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Medical <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive healthcare services across 30+ specialties with advanced medical technology and expert care
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialty Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert care from our team of specialized medical professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete healthcare infrastructure for your convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Schedule an appointment or contact us for more information about our services
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Book Appointment Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
