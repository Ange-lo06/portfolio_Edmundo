import React, { useState } from 'react';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="text-accent" size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="text-accent" size={20} />,
      label: "Telefone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="text-accent" size={20} />,
      label: "Localização",
      value: personalInfo.location,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: `https://linkedin.com/in/${personalInfo.linkedin}`
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: `https://${personalInfo.github}`
    }
  ];

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">ENTRE EM CONTATO</div>
            <h2 className="section-title mb-8">
              Vamos <span className="text-accent">Conversar</span>
            </h2>
            <p className="text-body text-secondary mb-12 max-w-2xl">
              Estou sempre aberto a novas oportunidades e desafios. Entre em contato para discutir 
              como posso contribuir com seu projeto ou equipe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in stagger-2">
              <Card className="card-minimal border-0 shadow-none mb-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-large font-semibold flex items-center space-x-2">
                    <MessageCircle className="text-accent" size={24} />
                    <span>Informações de Contato</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="accent-line mb-6"></div>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {method.icon}
                        <div>
                          <div className="label text-xs">{method.label}</div>
                          {method.href ? (
                            <a 
                              href={method.href}
                              className="text-body hover:text-accent transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-body">{method.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="label mb-4">REDES SOCIAIS</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 nav-link"
                        >
                          {social.icon}
                          <span>{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="fade-in stagger-3">
              <Card className="card-minimal border-0 shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="text-large font-semibold">
                    Envie uma Mensagem
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="accent-line mb-6"></div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label mb-2 block">NOME</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="rounded-none border-gray-300 focus:border-red-500 focus:ring-red-500"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="label mb-2 block">EMAIL</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="rounded-none border-gray-300 focus:border-red-500 focus:ring-red-500"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="label mb-2 block">ASSUNTO</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="rounded-none border-gray-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                    
                    <div>
                      <label className="label mb-2 block">MENSAGEM</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="rounded-none border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                        placeholder="Descreva sua mensagem ou oportunidade..."
                      />
                    </div>
                    
                    <Button type="submit" className="btn-accent w-full flex items-center justify-center space-x-2">
                      <Send size={16} />
                      <span>Enviar Mensagem</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;