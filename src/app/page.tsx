import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">RecommendMe</h1>
        <p className="text-lg text-muted-foreground">
          Tu próxima recomendación está a un clic.
        </p>
      </header>

      <main className="w-full max-w-2xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Encuentra Algo Nuevo</CardTitle>
            <CardDescription>
              Dinos qué te interesa y te daremos recomendaciones.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="text" placeholder="Escribe tus intereses aquí..." />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Más Información</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>¿Cómo Funciona?</DialogTitle>
                  <DialogDescription>
                    RecommendMe utiliza algoritmos avanzados para sugerirte contenido basado en tus preferencias.
                  </DialogDescription>
                </DialogHeader>
                <p className="py-4">
                  Simplemente escribe lo que te gusta, ¡y nosotros hacemos el resto!
                </p>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button">Entendido</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button>Buscar Recomendaciones</Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Opciones</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem disabled>API (Próximamente)</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </main>

      <footer className="mt-10 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} RecommendMe. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
