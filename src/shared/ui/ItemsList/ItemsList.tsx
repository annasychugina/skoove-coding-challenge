import React from 'react';
import {
  ListRenderItem,
  StyleProp,
  ViewStyle,
  FlatListProps,
  FlatList,
} from 'react-native';

import {rem} from '../helpers';

type Props<T> = FlatListProps<T> & {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
};

export const ItemsList = <T,>({
  style,
  contentContainerStyle,
  data,
  renderItem,
  keyExtractor,
  ...itemsListProps
}: Props<T>) => {
  console.log('data', data)
  return (
    <FlatList
      style={style}
      renderItem={renderItem}
      data={data}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[{paddingBottom: rem(20)}, contentContainerStyle]}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.8}
      {...itemsListProps}
    />
  );
};
