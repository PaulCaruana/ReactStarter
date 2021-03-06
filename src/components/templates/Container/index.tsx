import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import styled from 'styled-components';

export type StyledContainerProps = BoxProps & {
  tile?:
    | 'left'
    | 'equally'
    | 'spaceBetween'
    | 'spaceEvenly'
    | 'spaceAround'
    | 'center'
    | 'right'
    | 'wrap'
    | 'wrapEvenly'
    | 'wrapCenter'
    | 'noWrap'
    | 'fullWidth';
  isColumn?: boolean;
  gap?: string;
  children?: NonNullable<React.ReactNode>;
};

type ContainerProps = Omit<StyledContainerProps, 'justify' | 'flexDirection'>;
export type RowProps = ContainerProps;
export type ColProps = ContainerProps;
export type PanelProps = ContainerProps;

const flexSize = tile => {
  if (tile === 'equally') {
    return 'flex: 1;';
  }
  return '';
};

const margins = (tile, isColumn) => {
  if (!isColumn) {
    return '';
  }
  if (tile === 'left') {
    return 'margin-right: auto;';
  }
  if (tile === 'center') {
    return 'margin-left: auto; margin-right: auto;';
  }
  if (tile === 'right') {
    return 'margin-left: auto;';
  }
  return '';
};

const fullWidth = tile => {
  if (tile === 'fullWidth') {
    return 'width: 100%;';
  }
  return '';
};

const lastGap = (isColumn, gap) => {
  if (gap) {
    return isColumn ? `margin-bottom: ${gap}` : `margin-right: ${gap}`;
  }
  return '';
};

export const ContainerStyle = styled(Box)`
  ${({ tile, isColumn, gap }: StyledContainerProps) => `
    & > * {
        ${flexSize(tile)}
        ${margins(tile, isColumn)}
        ${fullWidth(tile)}
    }
    & > :not(:last-child) {
        ${lastGap(isColumn, gap)};
    }
  `}
` as React.ComponentType<StyledContainerProps>;

export function Row({
  tile = 'left',
  gap,
  position = 'relative',
  children,
  ...rest
}: ContainerProps) {
  return Container({ tile, isColumn: false, gap, position, children, ...rest });
}

export function Col({ gap, position = 'relative', children, ...rest }: ContainerProps) {
  return Container({ isColumn: true, gap, position, children, ...rest });
}

export function Panel({
  className = 'panel',
  fontSize = 16,
  tile,
  display = 'inline-flex',
  textAlign = 'center',
  gap,
  position = 'relative',
  children,
  bgcolor = 'background.paper',
  borderRadius = 6,
  boxShadow = 1,
  padding,
  minWidth = 200,
  ...rest
}: ContainerProps) {
  return Container({
    className,
    fontSize,
    tile,
    display,
    textAlign,
    isColumn: true,
    gap,
    position,
    bgcolor,
    borderRadius,
    boxShadow,
    padding,
    minWidth,
    children,
    ...rest,
  });
}

export function Container({
  tile,
  isColumn = false,
  gap,
  position = 'relative',
  children,
  ...rest
}: StyledContainerProps) {
  const display = 'flex';
  const direction = isColumn ? 'column' : 'row';
  const wrap =
    tile === 'wrap' || tile === 'wrapEvenly' || tile === 'wrapCenter' ? 'wrap' : 'nowrap';
  const justifyContentMap = {
    left: 'flex-start',
    right: 'flex-end',
    equally: 'space-between',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly',
    spaceAround: 'space-around',
    center: 'center',
    wrap: 'flex-start',
    wrapEvenly: 'space-between',
    wrapCenter: 'center',
    noWrap: 'flex-start',
    fullWidth: 'space-between',
  };
  const justifyContent = justifyContentMap[tile];
  return (
    <ContainerStyle
      display={display}
      tile={tile}
      isColumn={isColumn}
      justifyContent={justifyContent}
      flexDirection={direction}
      gap={gap}
      flexWrap={wrap}
      position={position}
      {...rest}
    >
      {children}
    </ContainerStyle>
  );
}
