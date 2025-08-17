import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image as ExpoImage } from 'expo-image';

export default function UserDetailsModal({ navigation, route }) {
  const p = route?.params ?? {};

  const backRef = useRef(null);
  useEffect(() => {
    if (Platform.OS === 'web') {
      const t = setTimeout(() => backRef.current?.focus?.(), 0);
      return () => clearTimeout(t);
    }
  }, []);

  const isStory =
    !!p.story ||
    p.mode === 'story' ||
    p.showStats === false ||
    (!!p.user && !p.stats && p.showStats !== true);

  const name =
    p?.user?.name ??
    p?.user?.username ??
    p?.user?.login ??
    p?.name ??
    'User';

  const avatar =
    p?.user?.avatar ||
    p?.user?.url ||
    p?.user?.uri ||
    p?.avatar ||
    p?.url;

  const storyImage =
    p?.storyUrl ||
    p?.imageItem?.image ||
    p?.imageItem?.url ||
    p?.image ||
    p?.url;

  const blurhash = Platform.OS === 'web' ? undefined : 'L5H2EC=PM+yV0g-mq.wG9c010J}I';

  const Header = (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, marginTop: 14 }}>
      <View
        style={{
          width: 68,
          height: 68,
          borderRadius: 34,
          borderWidth: 1,
          borderColor: '#1f2937', 
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e8f7f3',
          marginRight: 12,
        }}
      >
        <View
          style={{
            width: 62,
            height: 62,
            borderRadius: 31,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {avatar ? (
            <ExpoImage
              source={{ uri: avatar }}
              style={{ width: 56, height: 56, borderRadius: 28 }}
              contentFit="cover"
              {...(blurhash ? { placeholder: blurhash } : {})}
              transition={250}
              cachePolicy="memory-disk"
            />
          ) : (
            <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#E1F6F4', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="person" size={28} color="#000" />
            </View>
          )}
        </View>
      </View>

      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 20, letterSpacing: -0.3 }}>{name}</Text>
    </View>
  );

  const BubbleBackground = (
    <>
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '120%',
          aspectRatio: 1,
          borderRadius: 9999,
          backgroundColor: '#EAFBF6',
          top: -80,
          left: -120,
          opacity: 1,
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '140%',
          aspectRatio: 1,
          borderRadius: 9999,
          borderWidth: 1,
          borderColor: '#E1F6F4',
          top: 40,
          left: -160,
          opacity: 0.7,
          transform: [{ rotate: '-.45deg' }],
        }}
      />
    </>
  );

  if (isStory) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}> 
        {BubbleBackground}

        <View style={{ paddingTop: 20 }}> 
          <Pressable
            ref={backRef}
            focusable
            tabIndex={0}
            onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row', paddingLeft: 18, marginBottom: 8 }}
          >
            <Ionicons name="chevron-back-outline" size={26} color="#000" />
            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16, marginLeft: 6 }}>Go back</Text>
          </Pressable>

          {Header}

          <View style={{ alignItems: 'center', marginTop: 18, paddingHorizontal: 16 }}> 
            {storyImage ? (
              <View
                style={{
                  width: '90%',
                  borderRadius: 28,
                  overflow: 'hidden',
                  shadowColor: '#000',
                  shadowOpacity: 0.15,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 6,
                }}
              >
                <ExpoImage
                  source={{ uri: `${storyImage}?w=1080&auto=format&fit=crop&q=75` }}
                  style={{ width: '100%', aspectRatio: 3 / 4 }}
                  contentFit="cover"
                  {...(blurhash ? { placeholder: blurhash } : {})}
                  transition={300}
                  cachePolicy="memory-disk"
                />
              </View>
            ) : (
              <View
                style={{ width: '90%', aspectRatio: 3 / 4, borderRadius: 28, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}
              >
                <Text>Aucune image</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {BubbleBackground}
      <View style={{ paddingTop: 20 }}> 
        <Pressable
          ref={backRef}
          focusable
          tabIndex={0}
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row', paddingLeft: 18 }}
        >
          <Ionicons name="chevron-back-outline" size={26} color="#000" />
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16, marginLeft: 6 }}>Go back</Text>
        </Pressable>

        {Header}

        <View style={{ marginTop: 18, paddingHorizontal: 16 }}>
          {storyImage ? (
            <View
              style={{
                width: '100%',
                borderRadius: 24,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOpacity: 0.15,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 6 },
                elevation: 6,
              }}
            >
              <ExpoImage
                source={{ uri: `${storyImage}?w=1200&auto=format&fit=crop&q=75` }}
                style={{ width: '100%', height: 260 }}
                contentFit="cover"
                {...(blurhash ? { placeholder: blurhash } : {})}
                transition={300}
                cachePolicy="memory-disk"
              />
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}