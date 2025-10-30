import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Award,
  Clock,
  Stethoscope,
  Bone,
  Wind,
  Smile,
  Activity,
  Phone,
  Calendar,
  Shield,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Bone,
      title: "Orthopaedics",
      description: "Comprehensive bone and joint care with advanced surgical facilities",
    },
    {
      icon: Wind,
      title: "Pulmonology",
      description: "Expert respiratory care and advanced lung disease treatment",
    },
    {
      icon: Smile,
      title: "Dentistry",
      description: "Complete dental care from preventive to cosmetic procedures",
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Comprehensive diagnosis and treatment for complex conditions",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Patients Treated" },
    { icon: Award, value: "30+", label: "Medical Specialties" },
    { icon: Stethoscope, value: "50+", label: "Expert Doctors" },
    { icon: Clock, value: "24/7", label: "Emergency Care" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Affordable Healthcare",
      description: "Quality medical care accessible to all",
    },
    {
      icon: Award,
      title: "Expert Medical Team",
      description: "Highly qualified and experienced doctors",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Compassionate treatment with personal attention",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Health, Our{" "}
                <span className="text-primary">Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Nest Satya Hospital provides comprehensive, affordable healthcare with state-of-the-art facilities and compassionate medical professionals in the heart of Noida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white shadow-primary group"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+911204107777">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Call
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border-2 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                      <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">24/7 Emergency</p>
                        <p className="text-sm text-muted-foreground">Always here for you</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-xl">
                      <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Expert Doctors</p>
                        <p className="text-sm text-muted-foreground">50+ specialists</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                      <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Quality Care</p>
                        <p className="text-sm text-muted-foreground">Trusted by thousands</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-10 w-10 mx-auto" />
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services with 30+ specialties and advanced medical technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Nest Satya Hospital
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to providing exceptional healthcare with compassion and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Medical Assistance?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our team is available 24/7 for emergencies and appointments. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+911204107777">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 120-410-7777
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
