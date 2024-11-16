"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Cpu,
  Zap,
  Search,
  BarChart,
  Network,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="container text-white mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-white">Documentation</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Prise en main
              </h2>
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#create-account"
                        className="text-white hover:underline"
                      >
                        Créer un compte
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#deploy-website"
                        className="text-white hover:underline"
                      >
                        Déployer votre premier site
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#manage-deployments"
                        className="text-white hover:underline"
                      >
                        Gérer vos déploiements
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Fonctionnalités
              </h2>
              <Card className="bg-[#1a1a1a] text-white border-gray-800">
                <CardContent className="p-4">
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start">
                      <Globe className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">
                          Déploiement Décentralisé
                        </h3>
                        <p className="text-sm text-gray-400">
                          Déployez et accédez à votre site gratuitement pour
                          toujours sur la blockchain.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">
                          Aperçu Instantané & CI/CD
                        </h3>
                        <p className="text-sm text-gray-400">
                          Déploiements automatiques depuis GitHub avec des liens
                          d'aperçu instantanés et contrôle de version.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Cpu className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">Générateur de Site AI</h3>
                        <p className="text-sm text-gray-400">
                          Générez un site web à l'aide de l'IA et déployez-le
                          directement sur la blockchain.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Search className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">
                          Moteur de Recherche Décentralisé
                        </h3>
                        <p className="text-sm text-gray-400">
                          Notre moteur de recherche a indexé tous les sites web
                          sur le réseau blockchain.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">
                          Analyse & Surveillance
                        </h3>
                        <p className="text-sm text-gray-400">
                          Tableau de bord en temps réel et surveillance de la
                          disponibilité de vos sites décentralisés.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Network className="w-6 h-6 text-white mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold">CDN Décentralisé</h3>
                        <p className="text-sm text-gray-400">
                          Profitez de notre réseau de diffusion de contenu
                          décentralisé pour un accès plus rapide et fiable.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="create-account">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Créer un compte
              </h2>
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4">
                  <p className="text-white">
                    Pour commencer avec HTTP3, créez un compte. Utilisez le
                    bouton "Connexion" dans la barre de navigation pour vous
                    connecter avec votre portefeuille Web3 et profiter d'une
                    expérience fluide sur la blockchain.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="deploy-website">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Déployez votre premier site
              </h2>
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4">
                  <p className="mb-4 text-white">
                    Une fois votre portefeuille connecté, suivez ces étapes pour
                    déployer votre premier site :
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-white">
                    <li>Accédez au tableau de bord</li>
                    <li>Cliquez sur l'onglet "Déployer"</li>
                    <li>Entrez votre domaine et le contenu de votre site</li>
                    <li>
                      Cliquez sur "Déployer sur HTTP3" et confirmez la
                      transaction dans votre portefeuille
                    </li>
                    <li>Attendez la fin du déploiement</li>
                    <li>Accédez à votre site via le lien IPFS fourni</li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            <section id="manage-deployments">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Gérer vos déploiements
              </h2>
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4">
                  <p className="mb-4 text-white">
                    HTTP3 met à votre disposition des outils pour gérer vos
                    déploiements :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white">
                    <li>
                      Visualisez tous vos sites déployés dans le tableau de bord
                    </li>
                    <li>Modifiez et mettez à jour vos sites existants</li>
                    <li>Surveillez l'état du déploiement et les liens IPFS</li>
                    <li>
                      Utilisez le gestionnaire CI/CD pour des mises à jour
                      automatiques
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
