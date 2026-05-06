import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Heart,
  Home,
  IdCard,
  Menu,
  PawPrint,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Syringe,
  UserRound,
  Weight,
} from "lucide-react";

const C = {
  coral50: "#FFF1EC",
  coral100: "#FFDDD0",
  coral200: "#FFB89E",
  coral300: "#FF8F65",
  coral400: "#FF6B3D",
  coral500: "#F25426",
  coral600: "#D43E16",
  coral700: "#A82E0F",
  mint50: "#ECFAF4",
  mint100: "#CFF1E2",
  mint300: "#6EC9A4",
  mint500: "#1F9466",
  mint700: "#0E5639",
  sun100: "#FFF3B0",
  sun200: "#FFE872",
  sun300: "#FFD93B",
  night300: "#6E6452",
  night400: "#3D3528",
  night500: "#1F1A12",
  cream50: "#FFFCF6",
  cream100: "#FBF6EB",
  cream200: "#F4ECDA",
  cream300: "#E8DCC1",
  danger: "#D6361F",
  dangerBg: "#FFE7E1",
  warning: "#E58C12",
  warningBg: "#FFF3DF",
  info: "#2D7AB8",
  infoBg: "#E2F0FB",
};

const pets = [
  {
    id: "thor",
    emoji: "🐶",
    name: "Thor",
    fullName: "Thor Silva",
    breed: "Golden Retriever",
    age: "3 anos",
    weight: "28 kg",
    chip: "982·8742",
    tutor: "Ana Silva",
    vet: "Vet Jardim",
    bg: C.coral100,
    theme: "coral",
  },
  {
    id: "mia",
    emoji: "🐱",
    name: "Mia",
    fullName: "Mia Silva",
    breed: "Gata SRD",
    age: "5 anos",
    weight: "4,8 kg",
    chip: "771·2049",
    tutor: "Ana Silva",
    vet: "Clínica Aurora",
    bg: C.mint100,
    theme: "mint",
  },
];

const reminders = [
  { icon: Syringe, emoji: "💉", title: "Vacina antirrábica", pet: "Thor", time: "Vence em 12 dias", kind: "danger" },
  { icon: ClipboardList, emoji: "💊", title: "Vermífugo", pet: "Thor", time: "Hoje, 20h", kind: "warning" },
  { icon: CalendarDays, emoji: "🩺", title: "Consulta de rotina", pet: "Mia", time: "Sexta, 10h30", kind: "info" },
  { icon: Heart, emoji: "🛁", title: "Banho mensal", pet: "Thor", time: "Em 8 dias", kind: "ok" },
];

const history = [
  { date: "Hoje", title: "Vermífugo registrado", desc: "Dose marcada para 20h", icon: "💊" },
  { date: "12 mar", title: "Peso atualizado", desc: "Thor passou de 27,5 kg para 28 kg", icon: "⚖️" },
  { date: "02 mar", title: "Vacina V10", desc: "Comprovante anexado à carteirinha", icon: "💉" },
  { date: "18 fev", title: "Consulta veterinária", desc: "Check-up geral sem alterações", icon: "🩺" },
];

const screens = [
  { id: "home", label: "Início", icon: Home },
  { id: "card", label: "Carteira", icon: IdCard },
  { id: "alerts", label: "Alertas", icon: Bell },
  { id: "history", label: "Histórico", icon: ClipboardList },
  { id: "profile", label: "Eu", icon: UserRound },
];

function Mark({ size = 44, color = C.night500 }) {
  return (
    <svg viewBox="0 0 240 200" width={size * 1.2} height={size} fill={color} aria-hidden="true">
      <g>
        <path d="M30 170 Q18 110 36 88 Q50 76 70 86 Q86 110 78 170 Z" />
        <ellipse cx="40" cy="172" rx="12" ry="8" />
        <ellipse cx="68" cy="172" rx="12" ry="8" />
        <ellipse cx="56" cy="78" rx="26" ry="24" />
        <path d="M38 64 L30 38 Q38 38 46 60 Z" />
        <path d="M74 64 L82 38 Q74 38 66 60 Z" />
        <ellipse cx="56" cy="92" rx="10" ry="7" />
        <path d="M78 130 Q92 122 90 110 Q86 104 80 110 Q76 120 74 128 Z" />
      </g>
      <g>
        <path d="M142 172 Q162 162 160 138 Q156 122 144 128 Q140 138 148 150 Q146 164 138 168 Z" />
        <path d="M110 172 Q100 130 114 110 Q126 100 138 110 Q150 130 142 172 Z" />
        <circle cx="126" cy="100" r="20" />
        <path d="M112 92 L108 70 L122 84 Z" />
        <path d="M140 92 L144 70 L130 84 Z" />
        <ellipse cx="120" cy="172" rx="10" ry="6" />
      </g>
      <g>
        <rect x="170" y="172" width="62" height="6" rx="3" />
        <rect x="190" y="160" width="3" height="14" />
        <rect x="202" y="160" width="3" height="14" />
        <path d="M178 152 Q170 130 184 116 Q198 108 212 116 Q220 134 214 152 Q210 162 196 162 Q184 162 178 152 Z" />
        <circle cx="214" cy="112" r="14" />
        <path d="M226 110 L236 114 L226 118 Z" />
        <path d="M174 138 L156 130 L162 144 L156 154 L176 150 Z" />
        <path d="M192 130 Q200 144 196 156 Q184 154 188 138 Z" opacity="0.55" />
      </g>
    </svg>
  );
}

export default function MeuPetApp() {
  return <main />;
}
