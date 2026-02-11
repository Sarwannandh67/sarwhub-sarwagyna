
import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PillarCardProps {
  title: string;
  description: string;
}

export interface Segment {
  id: string;
  label: string;
  cases: string[];
  benefits: string[];
  speed: string;
}