import { NextLink } from '@components/NextLink'
import { PoweredByStripeIcon } from '@components/PoweredByStripeIcon'
import { getTakeoutPriceInfo } from '@lib/getProductInfo'
import * as sections from '@tamagui/bento'
import { ButtonDemo, InputsDemo, SelectDemo } from '@tamagui/demos'
import { ThemeTint, ThemeTintAlt } from '@tamagui/logo'
import { CheckCircle, ShoppingCart, X, XCircle } from '@tamagui/lucide-icons'
import { useBentoStore } from 'hooks/useBentoStore'
import { useEffect, useMemo, useState } from 'react'
import type Stripe from 'stripe'
import type { ButtonProps } from 'tamagui'
import {
  AnimatePresence,
  Button,
  Card,
  Circle,
  Dialog,
  EnsureFlexed,
  H1,
  H2,
  H3,
  H4,
  H5,
  Input,
  Label,
  Paragraph,
  RadioGroup,
  ScrollView,
  Separator,
  Sheet,
  SizableText,
  Spacer,
  Stack,
  Theme,
  Unspaced,
  XStack,
  YStack,
  useTheme,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import Image from 'next/image'
// import * as S from '@tamagui/studio/components'
// console.log('SSSSSSSS', S)

import { ContainerLarge } from '../../components/Container'
import { getDefaultLayout } from '../../lib/getDefaultLayout'

const ThemeTintEffect = () => {
  const theme = useTheme()
  const color = theme.color3.val

  useEffect(() => {
    document.querySelector('#theme-color')?.setAttribute('content', color)
    document.body.style.backgroundColor = color
  }, [color])

  return null
}

export default function ProPage() {
  // const store = useBentoStore()

  if (!process.env.NEXT_PUBLIC_IS_TAMAGUI_DEV) {
    return null
  }

  return (
    <YStack theme="tan" bg="$color6" y={-100} pt={100} pb={100}>
      <ThemeTintEffect />

      <ThemeTintAlt>
        <LinearGradient
          // colors={[`$color8`, `transparent`]}
          colors={[`transparent`, `$color9`]}
          start={[0, 1]}
          end={[0.1, 0.95]}
          fullscreen
          o={0.25}
        />
      </ThemeTintAlt>

      <YStack
        pe="none"
        pos="absolute"
        t={-1250}
        l="50%"
        x={-850}
        rotate="120deg"
        o={0.025}
        zi={-1}
      >
        <Image alt="idk" width={3000} height={3000} src="/takeout/geometric.svg" />
      </YStack>

      <YStack pe="none" fullscreen zi={100} rotateZ="20deg">
        {/* <StudioPreviewComponents /> */}
      </YStack>

      <Hero />
      <Body />
      <PurchaseModal
        coupon={
          {
            // stripe coupon
          } as Stripe.Coupon
        }
        starter={{
          active: true,
          description: 'a collection of components',
          id: 'bento',
          image: '/img',
          name: 'Bento',
          prices: [
            {
              active: true,
              currency: 'usd',
              unit_amount: 20000,
            },
          ],
        }}
      />
      <Spacer size="$10" />
    </YStack>
  )
}

ProPage.getLayout = getDefaultLayout

const Hero = () => {
  const store = useBentoStore()

  return (
    <YStack pos="relative" pb="$4" zi={0}>
      <ContainerLarge>
        <YStack
          fullscreen
          x={800}
          y={-100}
          zi={2}
          pe="none"
          scale={3}
          o={0.1}
          rotate="90deg"
          scaleY={-1}
          scaleX={-1}
          style={{ filter: 'blur(3px)' }}
        >
          <svg
            width="1280px"
            height="640px"
            viewBox="0 0 1280.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M5907 5542 c-66 -227 -86 -304 -147 -566 l-32 -139 -29 46 -29 47 21
87 c17 70 21 111 18 198 -2 61 -3 190 -3 287 0 98 0 177 -2 175 -1 -1 -16 -69
-34 -152 -36 -167 -48 -336 -33 -467 5 -43 8 -78 6 -78 -1 0 -10 11 -19 25
-13 20 -19 62 -24 173 -8 160 -7 157 -98 327 -24 44 -34 79 -39 130 -9 89 -21
56 -22 -60 -1 -103 13 -189 49 -295 15 -47 27 -86 26 -87 -1 -1 -37 30 -81 69
-74 64 -416 309 -423 303 -6 -5 199 -265 262 -332 60 -65 158 -132 258 -178
53 -24 108 -73 108 -96 0 -6 -19 3 -43 20 -79 54 -162 90 -268 116 -107 26
-269 55 -304 55 -23 -1 316 -149 420 -184 39 -13 104 -32 146 -41 l76 -18 36
-73 c20 -41 34 -74 31 -74 -3 0 -75 38 -160 85 -85 47 -184 97 -220 111 -67
25 -503 139 -509 132 -3 -3 252 -121 480 -221 50 -22 168 -68 264 -102 172
-62 199 -78 201 -121 0 -7 -55 13 -122 43 -175 78 -222 91 -412 119 -188 28
-274 55 -475 150 -63 30 -117 54 -120 54 -3 0 26 -23 64 -51 90 -65 196 -119
321 -162 54 -19 144 -58 199 -86 141 -73 337 -128 519 -147 l65 -7 21 -49 c12
-28 19 -52 17 -55 -3 -2 -106 29 -229 71 -253 85 -364 110 -558 126 -74 6
-202 18 -284 26 -163 15 -171 16 -165 10 2 -2 103 -30 224 -61 121 -31 267
-69 325 -85 164 -44 360 -86 540 -115 91 -15 170 -32 176 -39 13 -13 78 -175
73 -180 -2 -2 -107 43 -234 100 -126 57 -277 119 -335 138 -91 30 -767 173
-775 164 -5 -5 535 -202 800 -292 132 -45 315 -102 407 -126 151 -40 169 -47
177 -70 5 -14 21 -55 35 -92 l25 -67 -57 26 c-31 15 -133 64 -225 110 -285
141 -348 163 -667 233 -124 27 -276 61 -339 75 -62 14 -115 25 -117 23 -2 -2
40 -21 94 -42 53 -21 201 -81 327 -133 360 -148 502 -200 765 -282 l245 -77
34 -92 c18 -51 32 -95 29 -97 -2 -3 -155 58 -339 135 -323 134 -339 139 -479
164 -153 26 -216 48 -525 186 -200 89 -225 100 -225 96 0 -2 33 -23 73 -46 39
-24 104 -64 142 -90 95 -64 200 -120 324 -175 58 -25 118 -56 135 -69 62 -47
169 -107 259 -146 109 -46 226 -76 472 -119 99 -18 186 -35 194 -39 7 -4 26
-42 42 -85 28 -78 28 -78 6 -71 -12 3 -177 64 -367 134 -348 128 -388 140
-660 185 -52 9 -191 36 -309 61 -118 24 -216 43 -218 40 -2 -2 16 -8 41 -15
80 -20 359 -113 457 -152 53 -21 143 -68 200 -105 208 -137 330 -174 886 -269
29 -5 33 -11 57 -82 14 -42 25 -78 23 -79 -2 -2 -45 10 -97 26 -152 48 -338
97 -430 114 -47 8 -196 20 -331 26 -201 8 -259 14 -315 31 -98 30 -235 99
-344 173 -52 36 -97 63 -99 60 -16 -16 196 -190 307 -252 110 -61 186 -81 362
-98 198 -19 280 -40 385 -100 73 -42 155 -55 381 -61 l212 -6 37 -114 c20 -63
35 -118 33 -123 -3 -7 -71 17 -535 189 -255 94 -365 114 -793 145 -179 12
-327 21 -329 20 -5 -4 -3 -5 176 -48 184 -44 357 -100 598 -193 352 -137 388
-146 723 -184 103 -11 190 -24 193 -27 8 -10 51 -163 47 -168 -2 -2 -177 62
-388 141 -430 163 -428 162 -670 205 -96 17 -290 55 -429 85 -140 30 -260 55
-265 55 -6 -1 48 -19 119 -41 329 -100 534 -182 654 -262 236 -158 362 -202
821 -286 l204 -37 27 -92 c15 -51 25 -92 23 -92 -2 0 -65 28 -141 61 -208 93
-275 115 -464 153 -324 66 -339 67 -784 71 -259 3 -397 1 -375 -5 19 -5 87
-12 150 -15 209 -11 382 -58 646 -175 222 -99 429 -144 902 -200 113 -14 112
-13 127 -93 l7 -35 -89 19 c-48 11 -169 40 -268 64 -269 66 -334 75 -615 85
-140 5 -329 18 -420 30 -161 20 -447 64 -499 77 -14 3 -24 3 -21 0 9 -9 357
-113 425 -127 81 -16 238 -61 376 -109 317 -109 475 -134 924 -146 121 -4 221
-8 223 -10 3 -2 52 -175 52 -182 0 -1 -32 11 -71 27 -39 17 -113 43 -165 60
l-94 30 -288 0 c-304 0 -486 -12 -832 -55 -287 -36 -299 -43 -82 -44 172 -1
243 -8 477 -46 96 -16 678 -45 894 -45 185 0 184 0 203 -71 12 -46 13 -59 3
-59 -7 0 -86 18 -176 41 -161 40 -166 41 -309 37 -166 -5 -195 -13 -333 -97
-81 -49 -287 -199 -352 -256 l-30 -27 35 20 c19 11 105 61 190 111 212 125
240 135 370 135 80 0 126 -6 195 -25 80 -21 110 -24 268 -24 l178 0 10 -40 c6
-22 14 -56 20 -75 5 -19 9 -38 9 -41 0 -3 -35 0 -77 7 -121 20 -322 17 -425
-6 -113 -25 -136 -38 -200 -112 -70 -81 -87 -99 -123 -126 l-30 -23 42 21
c123 59 248 90 370 90 52 0 152 13 269 35 103 20 190 32 194 28 8 -9 98 -376
125 -508 9 -44 18 -81 20 -83 6 -6 75 105 75 121 0 12 -168 596 -186 646 -4
12 25 13 189 8 145 -5 225 -3 315 8 243 30 256 34 520 164 133 66 242 123 242
127 0 3 -8 3 -17 -1 -86 -33 -482 -149 -533 -156 -36 -5 -150 -9 -255 -9 -171
0 -204 -3 -335 -30 -80 -16 -146 -30 -147 -30 -4 0 -33 103 -33 117 0 7 134
80 298 162 163 82 332 172 374 200 44 29 161 129 271 233 106 101 262 246 347
322 233 209 238 217 55 72 -117 -92 -245 -163 -469 -260 -193 -83 -286 -146
-678 -462 l-227 -183 -21 72 c-12 40 -25 85 -31 101 -5 16 -9 30 -9 32 0 3
266 168 410 254 215 128 367 247 450 350 78 98 350 468 350 477 0 4 -100 -92
-222 -214 l-223 -221 -225 -109 c-256 -124 -320 -170 -472 -334 -50 -54 -94
-97 -97 -94 -8 8 -70 217 -71 236 0 17 150 90 385 189 121 51 272 128 340 173
28 18 124 98 215 177 91 80 239 206 329 280 224 184 246 205 111 109 -128 -92
-263 -159 -483 -243 -211 -80 -322 -147 -708 -432 -116 -85 -214 -152 -218
-149 -9 5 -36 94 -30 98 14 10 283 175 379 232 163 97 306 194 368 250 29 26
94 95 144 154 136 157 306 347 456 508 73 79 131 143 128 143 -4 0 -57 -48
-119 -108 -140 -134 -263 -216 -532 -355 -158 -82 -274 -177 -627 -518 l-227
-219 -25 83 c-14 46 -27 93 -28 105 -2 16 32 44 177 142 215 146 219 150 456
361 103 92 215 187 250 211 78 55 316 198 496 298 73 41 131 75 130 77 -11 11
-980 -468 -1077 -532 -100 -66 -315 -301 -417 -457 -14 -21 -28 -38 -32 -38
-6 0 -71 216 -71 237 0 6 64 58 143 114 505 364 588 451 824 857 162 278 295
532 279 532 -2 0 -57 -75 -122 -167 -90 -126 -158 -207 -279 -333 -88 -91
-217 -230 -286 -310 -114 -131 -571 -590 -588 -590 -7 0 -65 170 -59 174 21
16 497 400 568 459 118 99 247 239 308 335 26 40 118 182 206 315 87 133 170
260 184 282 l25 40 -24 -20 c-13 -10 -100 -94 -194 -185 -93 -91 -276 -268
-406 -393 -246 -236 -351 -349 -559 -602 -67 -82 -126 -151 -131 -153 -4 -2
-20 35 -35 81 l-27 84 205 244 c363 433 385 467 526 784 49 110 122 272 162
360 113 250 114 248 -10 70 -46 -66 -177 -251 -291 -411 -242 -339 -331 -476
-476 -732 -58 -103 -114 -200 -123 -215 l-17 -29 -45 123 -45 122 188 237
c273 345 271 342 458 779 67 156 124 288 127 293 3 4 3 8 0 8 -8 0 -485 -713
-553 -825 -33 -55 -100 -173 -148 -263 -48 -90 -91 -160 -96 -155 -9 9 -69
159 -69 172 0 5 84 134 186 288 103 153 195 298 206 323 11 25 42 115 70 200
28 85 81 241 119 347 38 105 69 195 69 200 0 4 -26 -48 -58 -117 -84 -181
-159 -312 -291 -511 -129 -193 -203 -331 -276 -514 -27 -66 -51 -123 -55 -127
-5 -7 -80 156 -80 174 0 4 58 116 130 250 110 207 134 260 161 358 17 63 58
209 90 324 33 115 57 211 55 213 -2 2 -13 -25 -26 -59 -45 -127 -105 -258
-224 -493 -113 -221 -132 -268 -213 -515 -4 -13 -63 99 -63 121 0 4 67 130
149 279 97 176 151 285 155 313 4 23 37 145 75 270 37 125 65 224 61 220 -22
-25 -265 -559 -346 -761 -52 -130 -99 -248 -105 -262 -11 -24 -12 -23 -45 42
l-33 66 105 229 c74 159 112 254 125 313 10 47 37 155 58 240 22 85 39 155 38
157 -7 6 -213 -536 -267 -702 -34 -104 -66 -193 -69 -198 -4 -4 -18 15 -31 42
l-23 50 56 123 c95 212 118 287 127 423 5 66 18 185 30 263 12 79 20 146 17
148 -2 2 -33 -98 -70 -224z"
              />
            </g>
          </svg>
        </YStack>

        <XStack gap="$6" py="$12" bc="transparent" jc="space-between" w={'100%'}>
          <YStack maw="55%" zi={100} jc="space-between" f={10} ai="flex-start" gap="$6">
            <>
              <H1
                ff="$cherryBomb"
                color="$color10"
                maw="100%"
                f={1}
                my="$-2"
                ls={-18}
                lh={200}
                fos={190}
                ussel="none"
                pe="none"
                style={{
                  textShadow: `1px 1px 1px var(--color8), 1px 2px 1px var(--color6),
                  1px 3px 1px var(--color6), 1px 4px 1px var(--color6), 1px 5px 1px var(--color6),
                  1px 6px 1px var(--color4), 1px 7px 1px var(--color4), 1px 8px 1px var(--color4),
                  1px 9px 1px var(--color3), 1px 10px 1px var(--color3), 1px 18px 400px var(--shadowColor)`,
                }}
              >
                BENTO&nbsp;
              </H1>

              <ThemeTintAlt>
                <H1
                  pos="absolute"
                  t={0}
                  l={0}
                  zi={10}
                  ff="$cherryBomb"
                  color="$color10"
                  maw="100%"
                  f={1}
                  my="$-2"
                  ls={-18}
                  lh={200}
                  fos={190}
                  ussel="none"
                  pe="none"
                  className="clip-text mask-gradient-up"
                  // @ts-ignore
                  style={{
                    mixBlendMode: 'hard-light',
                    backgroundImage: 'linear-gradient(var(--color2), var(--color10))',
                  }}
                >
                  BENTO&nbsp;
                </H1>
              </ThemeTintAlt>

              <ThemeTint>
                <H1
                  pos="absolute"
                  t={0}
                  l={0}
                  zi={11}
                  ff="$cherryBomb"
                  color="$color6"
                  maw="100%"
                  f={1}
                  my="$-2"
                  ls={-18}
                  lh={200}
                  fos={190}
                  ussel="none"
                  pe="none"
                  className="clip-text mask-gradient-down"
                  // @ts-ignore
                  style={{
                    backgroundImage: 'linear-gradient(var(--color7), var(--color8))',
                    textShadow: '0 5px 10px rgba(255,255,255,0.3)',
                    mixBlendMode: 'hard-light',
                  }}
                >
                  BENTO&nbsp;
                </H1>
              </ThemeTint>
            </>

            <YStack gap="$6">
              <>
                <XStack gap="$6">
                  <Stack bc="$color7" w={10} br="$10" my={10} />

                  <Paragraph ff="$munro" size="$9" fos={30} lh={50} color="$color11">
                    Boost your React Native development with a suite of copy-paste
                    primitives.
                  </Paragraph>
                </XStack>
              </>

              <XStack jc="space-between" ai="center" ml="$8">
                <Paragraph color="$color12" size="$5">
                  $200 one-time Purchase
                </Paragraph>

                <Circle size={6} bc="$color12" />
                <Circle size={6} bc="$color12" />
                <Circle size={6} bc="$color12" />

                <Paragraph color="$color12" size="$5">
                  $10/mo for early releases
                </Paragraph>
              </XStack>
            </YStack>

            <Theme name="green">
              <Button
                theme="green"
                iconAfter={ShoppingCart}
                fontFamily="$mono"
                size="$5"
                fontSize={22}
                bg="$color8"
                color="$color12"
                fontWeight="600"
                scaleSpace={1}
                scaleIcon={1.4}
                als="flex-end"
                hoverStyle={{
                  bg: '$color9',
                  boc: '$color9',
                }}
                pressStyle={{
                  bg: '$color6',
                }}
                onPress={() => {
                  store.showPurchase = true
                }}
              >
                $200
              </Button>
            </Theme>
          </YStack>

          <YStack
            mr={-400}
            maw={840}
            mt={0}
            pl="$4"
            x={20}
            mb={-300}
            y={-20}
            style={{
              maskImage: `linear-gradient(rgba(0, 0, 0, 1) 80%, transparent)`,
            }}
          >
            <XStack
              fw="wrap"
              zi={1}
              gap="$4"
              mah={300}
              transformOrigin="left top"
              als="center"
              scale={0.75}
            >
              <ThemeTint>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTint>
              <ThemeTintAlt>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={2}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={3}>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={4}>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={5}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTint>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTint>
              <ThemeTintAlt>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={2}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={3}>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={4}>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={5}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
            </XStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}

const Body = () => {
  return (
    <YStack
      pos="relative"
      py="$4"
      // style={{
      //   backdropFilter: 'blur(100px)',
      //   boxShadow: `0 0 200px rgba(0,0,0,0.2), 0 0 100px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.125), 0 0 10px rgba(0,0,0,0.125)`,
      // }}
      // py="$10"
    >
      {/* <YStack fullscreen bg="$color12" o={0.1} /> */}

      <ContainerLarge gap="$2">
        {/* <H2>Sections</H2>
      <Paragraph size="$6" color={'$gray11'}>
        Components are divided into sections and each section has multiple groups of
        related components.
      </Paragraph>

      <Spacer size="$8" /> */}

        <YStack gap="$12" px="$6">
          {sections.listingData.sections.map(({ sectionName, parts }) => {
            return (
              <YStack gap="$6" jc={'space-between'}>
                <H2 fontSize="$9" f={2}>
                  {`${sectionName[0].toUpperCase()}${sectionName.slice(1)}`}
                </H2>
                <XStack gap={'$6'} f={4} fw="wrap" fs={1}>
                  {parts.map(
                    ({ name: partsName, numberOfComponents, route, preview }) => (
                      <ComponentGroupsBanner
                        path={route}
                        name={partsName}
                        numberOfComponents={numberOfComponents}
                        preview={preview}
                      />
                    )
                  )}
                </XStack>
              </YStack>
            )
          })}
        </YStack>

        <Spacer size="$12" />
      </ContainerLarge>
    </YStack>
  )
}

const checkCircle = <CheckCircle color="$green9" />
const xCircle = <XCircle size={28} color="$red9" />

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount)
}

const PromotionInput = () => {
  const store = useBentoStore()

  const [localCode, setLocalCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const applyCoupon = (promoCode: string, coupon: Stripe.Coupon) => {
    store.appliedCoupon = coupon
    store.appliedPromoCode = promoCode
  }

  const removeCoupon = () => {
    setLocalCode('')
    store.appliedCoupon = null
    store.appliedPromoCode = null
  }

  const closeField = () => {
    setLocalCode('')
    store.promoInputIsOpen = false
  }

  const checkPromotion = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(
        `/api/check-promo-code?${new URLSearchParams({ code: localCode })}`
      )
      if (res.status === 200) {
        const json = (await res.json()) as Stripe.Coupon
        applyCoupon(localCode, json)
      } else {
        const json = await res.json()
        if (json.message) {
          alert(json.message)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {store.promoInputIsOpen ? (
        <XStack
          key="is-open"
          animation="100ms"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          opacity={1}
          gap="$2"
          jc="center"
          ai="center"
        >
          {store.appliedPromoCode ? (
            <>
              <Paragraph theme="green_alt2">
                Coupon {store.appliedPromoCode} applied.
              </Paragraph>
              <Button chromeless size="$2" onPress={removeCoupon}>
                Remove Coupon
              </Button>
            </>
          ) : (
            <>
              {!store.appliedPromoCode && (
                <Button disabled={isLoading} size="$2" chromeless onPress={closeField}>
                  Cancel
                </Button>
              )}
              <Input
                disabled={!!store.appliedPromoCode}
                value={store.appliedPromoCode ?? localCode}
                onChangeText={(text) => {
                  setLocalCode(text)
                }}
                placeholder="Enter the code"
                size="$2"
              />
              <Button
                disabled={isLoading}
                themeInverse
                size="$2"
                onPress={checkPromotion}
              >
                Submit
              </Button>
            </>
          )}
        </XStack>
      ) : (
        <Paragraph
          key="is-not-open"
          animation="100ms"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          opacity={1}
          ta="right"
          textDecorationLine="underline"
          cursor="pointer"
          theme="alt2"
          size="$2"
          onPress={() => {
            store.promoInputIsOpen = true
          }}
        >
          Have a coupon code?
        </Paragraph>
      )}
    </AnimatePresence>
  )
}

function PurchaseButton(props: ButtonProps) {
  return (
    <ThemeTint>
      <Button
        size="$6"
        backgroundColor="$color8"
        borderWidth={2}
        borderColor="$color10"
        hoverStyle={{
          backgroundColor: '$color9',
        }}
        pressStyle={{
          backgroundColor: '$color8',
        }}
        {...props}
      >
        <Button.Text ff="$silkscreen" fontWeight="700">
          {props.children}
        </Button.Text>
      </Button>
    </ThemeTint>
  )
}

const PurchaseModal = ({ starter, coupon }) => {
  const products = [starter]
  const store = useBentoStore()
  const [selectedProductsIds, setSelectedProductsIds] = useState<string[]>(
    products.filter(Boolean).map((p) => p!.id)
  )
  const sortedStarterPrices = (starter?.prices ?? []).sort(
    (a, b) => a.unit_amount! - b.unit_amount!
  )

  const [starterPriceId, setStarterPriceId] = useState(sortedStarterPrices[0]?.id)

  const sum = useMemo(() => {
    if (!starter) {
      return 0
    }
    let final = 0
    return starter.prices[0].unit_amount
    // TODO: fix this part
    // if (selectedProductsIds.includes(starter.id)) {
    //   final += starterPriceId
    //     ? starter.prices.find((p) => p.id === starterPriceId)?.unit_amount ?? 0
    //     : 0
    // }
    // return final
  }, [selectedProductsIds, starterPriceId, starter])

  // with discount applied
  const finalPrice = useMemo(() => {
    const appliedCoupon = store.appliedCoupon ?? coupon
    if (appliedCoupon) {
      if (appliedCoupon.amount_off) return sum - appliedCoupon.amount_off
      if (appliedCoupon.percent_off)
        return (sum * (100 - appliedCoupon.percent_off)) / 100
    }

    return sum
  }, [sum, store.appliedCoupon, coupon])
  const hasDiscountApplied = finalPrice !== sum

  const noProductSelected = selectedProductsIds.length === 0
  const showTeamSelect = selectedProductsIds.includes(starter?.id || '')

  // TODO: get bento price info
  const takeoutPriceInfo = getTakeoutPriceInfo(
    starter?.prices.find((price) => price.id === starterPriceId)?.description ?? ''
  )
  return (
    <Dialog
      modal
      open={store.showPurchase}
      onOpenChange={(val) => {
        store.showPurchase = val
      }}
    >
      <Dialog.Adapt when="sm">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom animation="medium">
          <Sheet.Frame padding="$4" space>
            <Sheet.ScrollView>
              <Dialog.Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Dialog.Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="medium"
          className="blur-medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          // animateOnly={['transform']}
          enterStyle={{ y: -10, opacity: 0, scale: 0.975 }}
          exitStyle={{ y: 10, opacity: 0, scale: 0.975 }}
          w="90%"
          maw={900}
          p={0}
        >
          <ScrollView p="$6" $gtSm={{ maxHeight: '90vh' }}>
            <YStack space>
              <XStack ai="center" jc="center" gap="$6" mx="$8">
                <Dialog.Title size="$9" $sm={{ size: '$7' }} my="$1" als="center">
                  Purchase
                </Dialog.Title>
              </XStack>

              <XStack
                f={1}
                space
                separator={<Separator vertical />}
                $sm={{ fd: 'column-reverse' }}
              >
                <YStack maxWidth={450}>
                  <YStack
                    separator={<Separator o={0.35} />}
                    borderWidth="$0.5"
                    borderRadius="$4"
                    borderColor="$borderColor"
                  >
                    <XStack px="$4" py="$4" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6" fow="bold">
                          Lifetime access + 1 year of updates
                        </Paragraph>
                        <Paragraph size="$3" theme="alt1">
                          You own the code for life, with updates for a year
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{checkCircle}</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$4" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">License Seats</Paragraph>
                        <Paragraph size="$3" theme="alt1">
                          Number of people that are allowed to develop on it
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{takeoutPriceInfo.licenseSeats}</Paragraph>
                      </XStack>
                    </XStack>

                    <XStack px="$4" py="$4" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Discord Seats</Paragraph>
                        <Paragraph size="$3" theme="alt1">
                          Access to the Bento channel
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{takeoutPriceInfo.discordSeats}</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$4" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Discord #bento-general channel</Paragraph>
                        <Paragraph size="$3" theme="alt1">
                          Private group chat for all Bento purchasers
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{checkCircle}</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$4" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Discord Private Channel</Paragraph>
                        <Paragraph size="$3" theme="alt1">
                          Private chat for your team only
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">
                          {takeoutPriceInfo.hasDiscordPrivateChannels
                            ? checkCircle
                            : xCircle}
                        </Paragraph>
                      </XStack>
                    </XStack>
                  </YStack>

                  {/* TODO: fix this */}
                  {/* <YStack mt="$6" space="$4">
                    <H4>What you will get with this package?</H4>
                    <Points />
                  </YStack> */}
                </YStack>

                <YStack f={2} space="$4">
                  <YStack
                    opacity={showTeamSelect ? 1 : 0.25}
                    pointerEvents={showTeamSelect ? 'auto' : 'none'}
                  >
                    <RadioGroup
                      gap="$2"
                      value={starterPriceId}
                      onValueChange={(val) => setStarterPriceId(val)}
                    >
                      {sortedStarterPrices.map((price) => {
                        const active = starterPriceId === price.id
                        const htmlId = `price-${price.id}`
                        return (
                          <ThemeTint key={price.id} disable={!active}>
                            <Label
                              f={1}
                              htmlFor={htmlId}
                              p="$4"
                              height="unset"
                              display="flex"
                              borderWidth="$0.25"
                              borderColor={active ? '$color8' : '$color5'}
                              borderRadius="$4"
                              space="$4"
                              ai="center"
                              hoverStyle={{
                                borderColor: active ? '$color10' : '$color7',
                              }}
                            >
                              <RadioGroup.Item id={htmlId} size="$6" value={price.id}>
                                <RadioGroup.Indicator />
                              </RadioGroup.Item>

                              <YStack gap="$0" f={1}>
                                <H4 mt="$-1">{price.description}</H4>

                                <Paragraph theme="alt1">
                                  {formatPrice(price.unit_amount! / 100, 'usd')} base + 1
                                  year of updates
                                </Paragraph>
                                {/* <Paragraph theme="alt1" size="$2">
                                  {formatPrice(price.unit_amount! / (100 * 2), 'usd')}{' '}
                                  annual renewal (cancel anytime)
                                </Paragraph> */}
                              </YStack>
                            </Label>
                          </ThemeTint>
                        )
                      })}
                    </RadioGroup>
                  </YStack>

                  <Spacer size="$1" />

                  <YStack space>
                    <XStack ai="flex-end" jc="flex-end" gap="$2">
                      {hasDiscountApplied ? (
                        <>
                          <H3 textDecorationLine="line-through" size="$8" theme="alt2">
                            {formatPrice(sum! / 100, 'usd')}
                          </H3>
                          <H3 size="$10">{formatPrice(finalPrice! / 100, 'usd')}</H3>
                        </>
                      ) : (
                        <H3 size="$10">{formatPrice(finalPrice! / 100, 'usd')}</H3>
                      )}
                    </XStack>
                    <Unspaced>
                      <YStack mt="$2">
                        <PromotionInput />
                      </YStack>
                    </Unspaced>

                    {/* <Separator /> */}

                    <YStack pb="$8" px="$4" space>
                      <NextLink
                        href={`api/checkout?${(() => {
                          const params = new URLSearchParams({
                            // product_id: products.id,
                            // price_id: selectedPriceId,
                            // quantity: seats.toString(),
                          })
                          for (const productId of selectedProductsIds) {
                            params.append('product_id', productId)
                          }
                          params.append(`price-${starter?.id}`, starterPriceId)
                          if (store.appliedPromoCode) {
                            // the coupon user applied
                            params.append(`promotion_code`, store.appliedPromoCode)
                          } else if (coupon) {
                            // the coupon that's applied by default (special event, etc.)
                            params.append(`coupon_id`, coupon.id)
                          }

                          return params.toString()
                        })()}`}
                      >
                        <PurchaseButton
                          disabled={noProductSelected}
                          opacity={noProductSelected ? 0.5 : undefined}
                        >
                          Purchase
                        </PurchaseButton>
                      </NextLink>
                      <XStack jc="space-between" space="$2" ai="center">
                        <XStack
                          ai="center"
                          separator={<Separator vertical bc="$color8" my="$2" />}
                          space="$2"
                        >
                          <SizableText
                            theme="alt1"
                            cursor="pointer"
                            onPress={() => {
                              store.showFaq = true
                            }}
                            style={{ textDecorationLine: 'underline' }}
                            hoverStyle={{
                              color: '$color11',
                            }}
                            size="$2"
                          >
                            FAQ
                          </SizableText>

                          <SizableText
                            theme="alt1"
                            cursor="pointer"
                            onPress={() => {
                              store.showAgreement = true
                            }}
                            style={{ textDecorationLine: 'underline' }}
                            hoverStyle={{
                              color: '$color11',
                            }}
                            size="$2"
                          >
                            License Agreement
                          </SizableText>
                        </XStack>
                        <Theme name="alt1">
                          <PoweredByStripeIcon width={96} />
                        </Theme>
                      </XStack>
                    </YStack>
                  </YStack>
                </YStack>
              </XStack>
            </YStack>
          </ScrollView>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$4"
                right="$4"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

const EmptyFn = () => (
  <XStack w={200} br="$10" bg="$color8" h="$4" elevation="$4" bw={1} boc="$color10" />
)

function ComponentGroupsBanner({
  name,
  numberOfComponents,
  path,
  preview,
}: {
  name: string
  numberOfComponents: number
  path: string
  preview?: () => JSX.Element
}) {
  const Preview = preview || EmptyFn

  return (
    <NextLink href={BASE_PATH + path} passHref>
      <YStack
        tag="a"
        animation="quicker"
        maw="calc(34% - 32px)"
        ov="hidden"
        elevation="$6"
        bc="$color2"
        mih={300}
        br="$9"
        accessible
        cursor="pointer"
        pos="relative"
        btc="$color5"
        btw={1}
        hoverStyle={{
          y: -2,
          bc: '$color3',
          outlineWidth: 0.5,
          outlineStyle: 'solid',
          outlineColor: '$color9',
        }}
        pressStyle={{
          bc: '$color1',
          y: 3,
        }}
      >
        <EnsureFlexed />
        <YStack
          fullscreen
          className="bg-grid mask-gradient-down"
          style={{ backgroundPosition: 'top left' }}
          o={0.085}
        />
        <YStack fullscreen ai="center" jc="center">
          <Preview />
        </YStack>
        <YStack p="$5" gap="$1">
          <H4 fontWeight={'normal'} fontSize="$8">
            {name}
          </H4>
          <H5 theme="alt1" fontWeight={'normal'} fontSize={'$2'}>
            {numberOfComponents} components
          </H5>
        </YStack>
      </YStack>
    </NextLink>
  )
}

const BASE_PATH = ' /bento'
