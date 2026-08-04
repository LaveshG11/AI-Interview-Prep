import Providers from "@/components/common/Providers";
import AppRouter from "@/routes/AppRouter";

export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}