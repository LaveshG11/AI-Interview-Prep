import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";

export default function Header() {
  return (
    <header className="border-b border-neutral-800">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="text-sm text-neutral-400">
            Production Setup
          </div>
        </div>
      </Container>
    </header>
  );
}