"use client";

import React, { useEffect, useState } from "react";
import {
  Globe,
  Shield,
  Zap,
  Activity,
  DollarSign,
  Users,
  Clock,
  Loader2,
  Layout,
  Rocket,
  GitBranch,
  Cpu,
  Network,
  Search,
} from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeploymentVisual from "@/components/DeploymentVisual";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePrivy } from "@privy-io/react-auth";
import { getUserIdByEmail, initializeClients } from "@/config/db/actions";

type Webpage = {
  webpages: {
    id: number;
    domain: string;
    cid: string;
    name: string | null;
  };
  deployments: {
    id: number;
    deploymentUrl: string;
    deployedAt: Date | null;
    transactionHash: string;
  } | null;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Sites");
  const [selectedWebpage, setSelectedWebpage] = useState<Webpage | null>(null);
  const [domain, setDomain] = useState("");
  const [content, setContent] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentError, setDeploymentError] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const { user, authenticated } = usePrivy();

  const sidebarItems = [
    { name: "Sites", icon: Layout },
    { name: "Déploiement", icon: Rocket },
    { name: "Gestion des Sites Web", icon: GitBranch },
    { name: "Tokens", icon: Zap },
    { name: "Site Web IA", icon: Cpu },
    { name: "CDN Décentralisé", icon: Network },
    { name: "Moteur de Recherche", icon: Search },
    { name: "Sites Exemples", icon: Globe },
    { name: "Contrats Intelligents", icon: Shield },
  ];

  useEffect(() => {
    async function init() {
      try {
        if (authenticated && user?.email?.address) {
          await initializeClients(user.email.address);
          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Échec de l'initialisation des clients", error);
        setDeploymentError("");
      }
    }
    init();
  }, [authenticated, user]);

  useEffect(() => {
    async function fetchUserId() {
      if (authenticated && user?.email?.address) {
        const fetchedUserId = await getUserIdByEmail(user?.email?.address);
        console.log(fetchUserId);
        console.log(user.email.address);
        setUserId(fetchedUserId);
      }
    }

    fetchUserId();
  }, [authenticated, user]);

  // Handle deployment
  const handleDeploy = () => {
    setIsDeploying(true);
    setDeploymentError("");

    try {
      // check if we have web3Storage client initialized
      if (!isInitialized) {
        throw new Error("Échec de l'initialisation des clients");
      }
      if (userId === null) {
        throw new Error("Utilisateur non authentifié ou ID introuvable");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="flex">
        <Sidebar
          items={sidebarItems}
          activeItem={activeTab}
          setActiveItem={setActiveTab}
        />
        <div className="flex-1 p-10 ml-64">
          <h1 className="text-4xl font-bold mb-8 text-white">
            Bienvenue sur Votre Tableau de Bord
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#0a0a0a] border-[#18181b]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Nombre Total de Sites Web
                </CardTitle>
                <Globe className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {/* {userWebpages.length} */}0
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#18181b]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Déploiement Récent
                </CardTitle>
                <Clock className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  N/A
                  {/* {userWebpages.length > 0
                  ? new Date(
                      Math.max(
                        ...userWebpages
                          .filter((w) => w.deployments?.deployedAt)
                          .map((w) => w.deployments!.deployedAt!.getTime())
                      )
                    ).toLocaleDateString()
                  : "N/A"} */}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#18181b]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Total des Déploiements
                </CardTitle>
                <Activity className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {/* {userWebpages.filter((w) => w.deployments).length} */}
                </div>
              </CardContent>
            </Card>
          </div>

          {activeTab === "Sites" && <p>Sites</p>}
          {activeTab === "Déploiement" && (
            <>
              <Card className="bg-[#0a0a0a] border-[#18181b]">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {selectedWebpage
                      ? "Modifier le Site Web"
                      : "Déployer un Nouveau Site Web"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="domain" className="text-lg text-gray-400">
                        Domaine
                      </Label>
                      <Input
                        id="domain"
                        placeholder="Saisissez votre domaine"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="mt-1 bg-[#0a0a0a] text-white border-gray-700"
                        disabled={!!selectedWebpage}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="content"
                        className="text-lg text-gray-400"
                      >
                        Content
                      </Label>
                      <Textarea
                        id="content"
                        placeholder="Saisissez votre contenu HTML"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 min-h-[200px] font-mono text-sm bg-[#0a0a0a] text-white border-gray-700"
                      />
                    </div>
                    <Button
                      onClick={selectedWebpage ? handleUpdate : handleDeploy}
                      // disabled={
                      //   isDeploying ||
                      //   !domain ||
                      //   !content ||
                      //   !isInitialized ||
                      //   userId === null
                      // }
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      {selectedWebpage
                        ? "Mettre à jour le site web"
                        : "Déployer en HTTP3"}
                      {/* {isDeploying ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {selectedWebpage
                            ? "Mise à jour en cours..."
                            : "Déploiement en cours..."}
                        </>
                      ) : selectedWebpage ? (
                        "Mettre à jour le site web"
                      ) : (
                        "Déployer en HTTP3"
                      )} */}
                    </Button>
                    {/* {deploymentError && (
                      <p className="text-red-400 mt-2">{deploymentError}</p>
                    )}
                    {deployedUrl && (
                      <DeploymentVisual deployedUrl={deployedUrl} />
                    )} */}
                  </div>
                </CardContent>
              </Card>

              {/* {content && (
                <Card className="mt-4 bg-[#0a0a0a] border-[#18181b]">
                  <CardHeader>
                    <CardTitle className="text-white">Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border border-[#18181b] p-4 rounded-lg">
                      <iframe
                        srcDoc={content}
                        style={{
                          width: "100%",
                          height: "400px",
                          border: "none",
                        }}
                        title="Website Preview"
                      />
                    </div>
                  </CardContent>
                </Card>
              )} */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
