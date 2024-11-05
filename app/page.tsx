import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  Cpu,
  Globe,
  Network,
  Search,
  Zap,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Déploiement Décentralisé",
      description:
        "Déployez et accédez à votre site web pour toujours, gratuitement, sur la blockchain.",
    },
    {
      icon: Zap,
      title: "Aperçu Instantané & CI/CD",
      description:
        "Déploiements automatiques depuis GitHub avec liens d'aperçu instantanés et contrôle de version.",
    },
    {
      icon: Cpu,
      title: "Générateur de Site Web IA",
      description:
        "Créez un site web avec l'IA et déployez-le directement sur la blockchain.",
    },
    {
      icon: Search,
      title: "Moteur de Recherche Décentralisé",
      description:
        "Notre moteur de recherche a indexé tous les sites web du réseau blockchain.",
    },
    {
      icon: BarChart,
      title: "Analyse & Surveillance",
      description:
        "Tableau de bord analytique en temps réel et surveillance de disponibilité pour vos sites web décentralisés.",
    },
    {
      icon: Network,
      title: "CDN Décentralisé",
      description:
        "Utilisez notre réseau de distribution de contenu décentralisé pour un accès plus rapide et fiable.",
    },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
        <header className="mb-12 text-center">
          <Image
            className="mx-auto text-white mb-4"
            src="/svg/logo.svg"
            alt="Logo HTTP3"
            width={70}
            height={38}
            priority
          />
          <h1 className="text-5xl max-w-3xl mx-auto font-bold mb-4">
            L’avenir de l’hébergement Web3 via{" "}
            <span className="text-primary">les Smart Contracts</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hébergez gratuitement vos sites web simples, comme des calculateurs
            et des convertisseurs d’unités, directement sur la blockchain ! Zéro
            frais d’hébergement, aucune date d’expiration. Préservez vos projets
            web pour toujours avec PowerHost, l’hébergement décentralisé.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="mr-4">
              Déployez gratuitement maintenant <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Découvrez comment ça fonctionne
          </Button>
        </header>

        <main className="max-w-6xl mx-auto">
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Plateforme Révolutionnaire d&apos;Hébergement Web3
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] border border-1 p-6 rounded-xl transition-opacity duration-300 hover:opacity-80 hover:shadow-lg"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* <DeveloperTools />
          <UserAccess /> */}

          {/* New sections can be added here for Marketplace, Governance, etc. */}
        </main>
      </div>
    </ThemeProvider>
  );
}
