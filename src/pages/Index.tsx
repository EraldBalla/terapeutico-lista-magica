import { useState } from "react";
import HomeSelezioneGiochi from "./HomeSelezioneGiochi";
import MondoOggettiPage from "./MondoOggettiPage";
import MacchinaSuoniPage from "./MacchinaSuoniPage";

type CurrentView = "home" | "mondo_oggetti" | "macchina_suoni";

const Index = () => {
  const [currentView, setCurrentView] = useState<CurrentView>("home");

  if (currentView === "mondo_oggetti") {
    return <MondoOggettiPage onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "macchina_suoni") {
    return <MacchinaSuoniPage onBack={() => setCurrentView("home")} />;
  }

  return (
    <HomeSelezioneGiochi
      onSelectMondoOggetti={() => setCurrentView("mondo_oggetti")}
      onSelectMacchinaSuoni={() => setCurrentView("macchina_suoni")}
    />
  );
};

export default Index;
