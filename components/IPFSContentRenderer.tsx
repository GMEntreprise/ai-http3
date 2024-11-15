import React, { useState, useEffect } from "react";

interface IPFSContentRendererProps {
  ipfsUrl: string;
}

const IPFSContentRenderer: React.FC<IPFSContentRendererProps> = ({
  ipfsUrl,
}) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(ipfsUrl);
        const htmlContent = await response.text();
        setContent(htmlContent);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du contenu IPFS :",
          error
        );
        setContent("<p>Erreur de chargement du contenu</p>");
      }
    };

    fetchContent();
  }, [ipfsUrl]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default IPFSContentRenderer;
