import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RootStackParamList } from "../../types/navigation";

const Header = () => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const navigation = useNavigation();
  const route = useRoute();

  // Estilos melhorados
  const styles = {
    header: {
      width: "100%",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
      position: "sticky" as const,
      top: 0,
      zIndex: 1000,
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    },
    nav: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "1200px",
      width: "100%",
      flexWrap: "wrap" as const,
      "@media (max-width: 768px)": {
        gap: "8px",
      },
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "transparent",
      color: "#555",
      fontSize: "16px",
      fontWeight: 600 as const,
      cursor: "pointer" as const,
      transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
      position: "relative" as const,
      overflow: "hidden" as const,
      textTransform: "capitalize" as const,
      "@media (max-width: 768px)": {
        padding: "8px 16px",
        fontSize: "14px",
      },
    },
    buttonHover: {
      color: "#f36f21",
      transform: "translateY(-2px)",
    },
    activeButton: {
      color: "#f36f21",
      fontWeight: 700 as const,
    },
    buttonIndicator: {
      position: "absolute" as const,
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0%",
      height: "3px",
      backgroundColor: "#f36f21",
      transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
      borderRadius: "3px",
    },
    buttonIndicatorActive: {
      width: "80%",
    },
  };

  // Itens do menu com tipagem segura
  const menuItems: Array<{
    label: string;
    screen: keyof RootStackParamList;
  }> = [
    { label: "Atividades", screen: "Activities" },
    { label: "Fornecedores", screen: "Suppliers" },
    { label: "Missão", screen: "Mission" },
    { label: "Fotos", screen: "Photos" },
    { label: "História", screen: "History" },
    { label: "Quem Somos", screen: "AboutUs" },
    { label: "Redes", screen: "Networks" },
    { label: "Depoimentos", screen: "Testimonials" },
    { label: "O que é câncer", screen: "AboutCancer" },
  ];

  const handleButtonClick = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  const isActive = (screenName: keyof RootStackParamList) => {
    return route.name === screenName;
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {menuItems.map((item, index) => {
          const active = isActive(item.screen);
          const hovered = hoveredButton === index;

          return (
            <button
              key={`nav-item-${index}`}
              style={{
                ...styles.button,
                ...(hovered && styles.buttonHover),
                ...(active && styles.activeButton),
              }}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleButtonClick(item.screen)}
              aria-current={active ? "page" : undefined}
              aria-label={`Navegar para ${item.label}`}
            >
              {item.label}
              <span
                style={{
                  ...styles.buttonIndicator,
                  ...((hovered || active) && styles.buttonIndicatorActive),
                }}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
