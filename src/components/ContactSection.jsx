import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapIcon,
  Phone,
  Send,
  Twitch,
  X,
  Youtube,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "../lib/utils";
import { SectionHeader } from "./SectionHeader";

// Web3Forms delivers submissions to the inbox tied to the access key
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// `href` is optional: details without one render as plain text
const contactDetails = [
  {
    label: "Email",
    value: "davidleonsalasdev@gmail.com",
    href: "mailto:davidleonsalasdev@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+52 229 177 9456",
    href: "tel:+522291779456",
    icon: Phone,
  },
  { label: "Location", value: "Veracruz, Mexico Open to remote", icon: MapIcon },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-leon-salas-604519243",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/davidsleonn/",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Pambasico",
    icon: Youtube,
  },
  { label: "Twitch", href: "https://www.twitch.tv/pambasico", icon: Twitch },
  { label: "X", href: "https://x.com/Pambasico", icon: X },
];

const emptyForm = { name: "", email: "", message: "" };

const fields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Type your name...",
  },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "Type your email...",
  },
  {
    id: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Type your message...",
  },
];

const fieldClassName =
  "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:border-primary";

export const ContactSection = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_KEY,
          subject: `New portfolio message from ${formData.name}`,
          botcheck: e.target.botcheck.checked,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData(emptyForm);
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="Get In"
          highlight="Touch"
          subtitle="Open to backend and data engineering opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact</h3>

            <ul className="space-y-6">
              {contactDetails.map(({ label, value, href, icon }) => {
                const Icon = icon;
                return (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        {label}
                      </h4>
                      {href ? (
                        <a
                          href={href}
                          className="hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p>{value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Elsewhere</h4>
              <div className="flex gap-4">
                {socials.map(({ label, href, icon }) => {
                  const Icon = icon;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {fields.map(({ id, label, type, placeholder }) => {
                const isTextarea = type === "textarea";
                const Field = isTextarea ? "textarea" : "input";
                return (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium mb-2"
                    >
                      {label}
                    </label>
                    <Field
                      id={id}
                      name={id}
                      type={isTextarea ? undefined : type}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className={cn(
                        fieldClassName,
                        isTextarea && "resize-none h-32",
                      )}
                    />
                  </div>
                );
              })}

              {/* Honeypot: hidden from people; bots that tick it get rejected */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSending}
                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};
