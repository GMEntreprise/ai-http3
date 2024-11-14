import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, LogIn, LogOut } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { createOrUpdateUser } from "@/config/db/actions";

export default function Navbar() {
  const { login, logout, authenticated, user } = usePrivy();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailConfirmModal, setShowEmailConfirmModal] = useState(false);

  useEffect(() => {
    if (authenticated && user) {
      handleUserAuthenticated();
    }
  }, [authenticated, user]);

  useEffect(() => {
    const hasClosedModal = localStorage.getItem("emailConfirmModalClosed");
    if (!hasClosedModal && authenticated) {
      setShowEmailConfirmModal(true);
    }
  }, [authenticated]);

  console.log("all about the users", user);

  const handleUserAuthenticated = async () => {
    if (user && user.wallet?.address) {
      try {
        await createOrUpdateUser(
          user.wallet.address,
          user.email?.address || ""
        );
        const hasClosedModal = localStorage.getItem("emailConfirmModalClosed");
        if (!hasClosedModal) {
          setShowEmailConfirmModal(true);
        }
      } catch (error) {
        console.error("Error updating user information:", error);
      }
    }
  };

  const handleAuth = () => {
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };

  const handleCloseModal = () => {
    setShowEmailConfirmModal(false);
    localStorage.setItem("emailConfirmModalClosed", "true");
  };

  return (
    <>
      <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/logo.svg"
            alt="HTTP3 logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 text-xl font-bold">HTTP3HOST</span>
        </Link>

        {/* Navigation pour les écrans moyens et grands */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="text-foreground hover:text-primary"
          >
            Tableau de Bord
          </Link>
          <Link href="/search" className="text-foreground hover:text-primary">
            Rechercher
          </Link>
          <Link href="/docs" className="text-foreground hover:text-primary">
            Documentation
          </Link>

          {/* Bouton de connexion/déconnexion */}
          <Button onClick={handleAuth} variant="outline">
            {authenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Connexion
              </>
            )}
          </Button>

          {/* Menu déroulant pour les utilisateurs connectés */}
          {authenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile">Profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Paramètres</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help">Aide & Support</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {/* <ModeToggle /> */}
        </div>

        {/* Bouton pour ouvrir le menu mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/dashboard"
                className="text-foreground hover:text-primary"
              >
                Tableau de Bord
              </Link>
              <Link
                href="/search"
                className="text-foreground hover:text-primary"
              >
                Rechercher
              </Link>
              <Link href="/docs" className="text-foreground hover:text-primary">
                Documentation
              </Link>
              <Button onClick={handleAuth} variant="outline" className="w-full">
                {authenticated ? "Déconnexion" : "Connexion"}
              </Button>
              {authenticated && (
                <>
                  <Link
                    href="/profile"
                    className="text-foreground hover:text-primary"
                  >
                    Profil
                  </Link>
                  <Link
                    href="/settings"
                    className="text-foreground hover:text-primary"
                  >
                    Paramètres
                  </Link>
                  <Link
                    href="/help"
                    className="text-foreground hover:text-primary"
                  >
                    Aide & Support
                  </Link>
                </>
              )}
              {/* <ModeToggle /> */}
            </div>
          </div>
        )}
      </nav>

      {/* Modal de confirmation d'email */}
      <Dialog
        open={showEmailConfirmModal}
        onOpenChange={setShowEmailConfirmModal}
      >
        <DialogContent
          className={cn(
            "bg-black",
            "shadow-lg",
            "border border-border",
            "p-6",
            "max-w-md",
            "mx-auto"
          )}
        >
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold text-center">
              Confirmez votre email
            </DialogTitle>
            <DialogDescription className="text-center">
              Pour activer les fonctionnalités avancées, veuillez confirmer
              votre email :
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <ol className="list-decimal list-inside space-y-2">
              <li>Vérifiez votre boîte de réception</li>
              <li>Trouvez l&apos;email de confirmation de Web3 Storage</li>
              <li>Cliquez sur le lien de vérification dans l&apos;email</li>
            </ol>
            <p className="text-sm text-muted-foreground italic">
              Note : Si vous avez déjà confirmé votre email, vous pouvez fermer
              cette fenêtre.
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleCloseModal}>Fermer</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
