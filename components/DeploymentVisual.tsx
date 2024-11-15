import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Code, Eye } from "lucide-react";
import IPFSContentRenderer from "./IPFSContentRenderer";

interface DeploymentVisualProps {
  deployedUrl: string;
}

export default function DeploymentVisual({
  deployedUrl,
}: DeploymentVisualProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [showSourceCode, setShowSourceCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showIPFSContent, setShowIPFSContent] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(deployedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(deployedUrl);
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error("Échec du chargement du contenu :", error);
      setContent("Erreur lors du chargement du contenu. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewPreview = async () => {
    if (!content) await fetchContent();
    setShowPreview(true);
    setShowSourceCode(false);
  };

  const handleViewSourceCode = async () => {
    if (!content) await fetchContent();
    setShowSourceCode(true);
    setShowPreview(false);
  };

  return (
    <div className="deployment-visual text-white">
      <h2 className="text-2xl font-semibold mb-4">Statut du Déploiement</h2>
      <div className="flex items-center justify-center mb-4">
        <p className="text-muted-foreground mr-2">
          Votre contenu a été déployé avec succès !
        </p>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center"
          onClick={handleCopyUrl}
        >
          {copied ? (
            <Check className="h-4 w-4 mr-2" />
          ) : (
            <Copy className="h-4 w-4 mr-2" />
          )}
          {copied ? "Copié !" : "Copier l'URL"}
        </Button>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <Button
          onClick={handleViewPreview}
          variant={showPreview ? "default" : "outline"}
        >
          <Eye className="h-4 w-4 mr-2" /> Voir l&lsquo;Aperçu
        </Button>
        <Button
          onClick={handleViewSourceCode}
          variant={showSourceCode ? "default" : "outline"}
        >
          <Code className="h-4 w-4 mr-2" /> Voir le Code Source
        </Button>
      </div>
      <p>
        URL IPFS :{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowIPFSContent(!showIPFSContent);
          }}
        >
          {deployedUrl}
        </a>
      </p>
      {showIPFSContent && (
        <div className="ipfs-content-preview">
          <h3>Aperçu du Contenu IPFS :</h3>
          <IPFSContentRenderer ipfsUrl={deployedUrl} />
        </div>
      )}
      {isLoading && <p>Chargement du contenu...</p>}
      {!isLoading && showPreview && (
        <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-white text-black p-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
      {!isLoading && showSourceCode && (
        <div className="w-full aspect-video rounded-lg overflow-hidden border border-border">
          <pre className="text-left p-4 overflow-auto h-full">
            <code>{content}</code>
          </pre>
        </div>
      )}
      <div className="mt-4 p-4 text-white bg-black text-left">
        <h3 className="font-semibold">URL Déployée :</h3>
        <p>{deployedUrl}</p>
      </div>
    </div>
  );
}
