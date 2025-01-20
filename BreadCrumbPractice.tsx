import React, { useMemo } from 'react';
import { Link, uselocation } from "react-router-dom"
import { text } from '../styles';
import { RiHome5Fill, RiAccountCircleFill } from 'react-icons/ri';
import { TbTargetArrow } from 'react-icons/tb':
import { FaFileContract } from 'react-icons/tb':

type RouteType = {
  label: string;
  icon: JSX.Element;
  path: string;
}

const routes: RouteType[] = [
  {
    label: 'Discover',
    icon: <RiHome5Fill className="text-accent mr-2" />,
    path: 'discover',
  },
  {
    label: 'Goals',
    icon: <TbTargetArrow className="text-accent mr-2" />,
    path: 'goals',
  },
  {
    label: 'Contracts',
    icon: <FaFileContract className="text-accent mr-2" />,
    path: 'contracts',
  },
];