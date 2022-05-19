import React, { ReactElement } from "react";

export type IconProps = {
  width?: number;
  height?: number;
};

export type NavigationTextProps = {
  message: string;
};

export type ButtonProps = {
  message: string;
  disabled?: boolean;
  onClick?: () => void;
};

export type HexagonProps = {
  message: string;
  icon: React.FC;
};

export type HomeGridPhotoProps = {
  img: string;
  message: string;
};

export type NavMemoProps = {
  Icon: ReactElement;
  message: string;
  hasNotification?: boolean;
  count?: number;
};

export type DiaryProps = {
  date: string;
  message: string;
};
