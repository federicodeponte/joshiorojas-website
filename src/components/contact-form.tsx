"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const mandantType = formData.get("mandant_type") as string;
    const anliegen = formData.get("anliegen") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
      const emailData = new FormData();
      emailData.append("Mandant", mandantType);
      emailData.append("Anliegen", anliegen);
      emailData.append("Name", name);
      emailData.append("E-Mail", email);
      emailData.append("_subject", "📩 Neue Kontaktanfrage von " + name);
      emailData.append("_template", "table");
      emailData.append("_captcha", "false");

      await fetch("https://formsubmit.co/jrm@jrmlegal.de", {
        method: "POST",
        body: emailData,
      });

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Anliegen betrifft */}
      <div className="space-y-2">
        <Label htmlFor="mandant_type">Anliegen betrifft *</Label>
        <select
          id="mandant_type"
          name="mandant_type"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Bitte auswählen</option>
          <option value="Privatmandant">Privatmandant</option>
          <option value="Unternehmen">Unternehmen</option>
        </select>
      </div>

      {/* Worum geht es */}
      <div className="space-y-2">
        <Label htmlFor="anliegen">Worum geht es *</Label>
        <Textarea
          id="anliegen"
          name="anliegen"
          required
          placeholder="Bitte beschreiben Sie kurz Ihr Anliegen..."
          rows={5}
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ihr Name"
        />
      </div>

      {/* E-Mail */}
      <div className="space-y-2">
        <Label htmlFor="email">E-Mail-Adresse *</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </Button>

      {/* Success Message */}
      {isSuccess && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-sm text-green-800 dark:text-green-200">
            ✓ Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}
    </form>
  );
}
