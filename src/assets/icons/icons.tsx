import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../utils/theme"

export const GasolineIcon = (props: any) => {
    return (
        <Svg
          width={14}
          height={16}
          {...props}
          viewBox="0 0 14 16"
        >
          <Path
            d="M1.656 10.806c-.188.183-.377.341-.538.523-.2.224-.278.502-.278.801v2.526c0 .269-.164.454-.407.463-.23.009-.427-.159-.427-.389-.003-.932-.015-1.862.006-2.794.012-.505.242-.941.598-1.3.14-.14.287-.275.448-.427-.15-.15-.278-.284-.412-.416-.281-.278-.281-.487-.003-.765.717-.714 1.428-1.432 2.149-2.143.074-.072.086-.125.026-.212-.116-.18-.224-.365-.331-.55-.129-.224-.11-.4.071-.583a455.92 455.92 0 0 1 1.7-1.7c.22-.215.452-.212.67.006.144.143.284.293.44.457.101-.102.188-.185.275-.272.122-.122.248-.245.37-.37.236-.237.449-.24.688-.012l.053.047c.033-.03.066-.056.096-.086.535-.526 1.052-1.08 1.614-1.575.84-.742 1.844-1.106 2.962-1.148.352-.012.708-.003 1.06-.003.27 0 .443.167.443.436.003.538.003 1.076 0 1.614-.003.287-.17.449-.46.454-.41.01-.82-.005-1.223.03-.49.045-.917.27-1.27.61-.472.457-.932.927-1.396 1.393-.014.015-.023.03-.041.054.269.23.236.564.293.866.107.592.197 1.187.298 1.781A.456.456 0 0 1 9 8.544c-1.118 1.115-2.224 2.241-3.353 3.344-.822.801-2.065.786-2.896-.009-.335-.32-.658-.651-.987-.98-.038-.03-.074-.063-.107-.093Zm6.303-5.938c.403-.407.825-.81 1.225-1.234.705-.745 1.557-1.121 2.585-1.082.102.003.207 0 .314 0v-.816c-.018-.01-.027-.015-.036-.015-.134-.003-.269-.003-.403-.003-1.127-.003-2.092.385-2.896 1.174-.451.443-.897.894-1.342 1.342-.018.018-.03.036-.039.048.197.194.389.383.592.586Zm-4.94 6.136c.08.071.167.14.245.218.556.559 1.309.562 1.868.003.466-.464.93-.93 1.392-1.393.033-.033.066-.069.11-.117l-1.23-.612V9.3c0 .233.006.47-.003.702-.01.24-.18.41-.404.416a.424.424 0 0 1-.427-.413c-.006-.14 0-.278-.003-.418 0-.036-.012-.069-.018-.11-.511.507-1.004 1-1.53 1.527ZM12.48 9.228c-1.032-.009-1.776-.998-1.447-1.975.131-.392.334-.763.535-1.13.167-.311.367-.604.565-.897.167-.248.502-.257.669-.018.424.61.81 1.24 1.088 1.934.364.914-.224 1.838-1.058 2.026-.117.03-.233.042-.353.06Zm-.004-3.007c-.257.452-.52.855-.663 1.318-.08.257.03.547.257.709a.682.682 0 0 0 .807 0 .646.646 0 0 0 .257-.709c-.138-.463-.4-.866-.658-1.318Z"
            fill={props.color}
          />
        </Svg>
    )
}

export const FireIcon = (props: any) => {
  return (
      <Svg
        width={9}
        height={12}
        {...props}
        viewBox="0 0 9 12"
      >
        <Path
          d="M8.496 8.361a4.38 4.38 0 0 1-.133.943c-.244.718-.797 1.267-1.478 1.44-.128.033-.26.054-.397.059H6.38a3.179 3.179 0 0 1-1.112-.211c-1.056-.399-1.89-1.33-2.25-2.509a2.172 2.172 0 0 1-.044-.155l-.002-.007c-.058-.22-.1-.447-.122-.678a4.115 4.115 0 0 0-.193.683l-.012.062-.033.209c-.025.194-.04.394-.04.597 0 .22.017.434.046.644a4.25 4.25 0 0 0 .667 1.76 2.01 2.01 0 0 1-.876-.53 2.354 2.354 0 0 1-.549-.91 2.725 2.725 0 0 0 .019.635c.103.685.476 1.267.992 1.607C1.73 11.54.862 10.455.589 9.114v-.002a6.635 6.635 0 0 1-.089-.98V8.13c.004-.186.019-.366.043-.545-.01-.004-.018-.011-.029-.016.054-.797.251-1.55.56-2.226a6.46 6.46 0 0 0 .325 1.969c.066.202.142.396.227.586a8.952 8.952 0 0 1-.047-1.193v-.03c.016-.521.076-1.03.18-1.522a8.378 8.378 0 0 1 .555-1.718A7.803 7.803 0 0 1 4.289.74 7.05 7.05 0 0 1 5.312 0c-.29.287-.539.625-.735 1.003a4.29 4.29 0 0 0-.441 1.408c-.025.18-.038.366-.042.556v.05a4.524 4.524 0 0 0 .174 1.233c.091.32.218.62.373.899.153.275.335.528.542.753a.567.567 0 0 0 .106.11c.078.061.174.098.277.098.27 0 .489-.245.489-.547 0-.454-.104-.882-.284-1.255.4.111.77.297 1.106.54.679.498 1.196 1.248 1.451 2.13.112.39.172.804.172 1.235l-.004.148Z"
          fill={props.color}
        />
      </Svg>
  )
}

export const SearchIcon = (props: any) => {
  return (
      <Svg
        width={12}
        height={12}
        {...props}
        viewBox="0 0 12 12"
      >
        <Path
          d="M11 11 7.667 7.667m1.11-2.778a3.889 3.889 0 1 1-7.777 0 3.889 3.889 0 0 1 7.778 0Z"
          stroke={COLORS.red}
          strokeLinecap="round"
          strokeLinejoin="round"
          
        />
      </Svg>
  )
}
