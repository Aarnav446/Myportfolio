import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  type: 'AI' | 'Robotics' | 'Web' | 'Data';
}

export interface Skill {
  subject: string;
  A: number; // Proficiency level (0-150 for Radar)
  fullMark: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface TerminalCommand {
  command: string;
  output: string | React.ReactNode;
}