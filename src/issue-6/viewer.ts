import { BackendErrors, Fake, isBackendError, ViewerId } from "../unimportant"
import opaque from "@isthatcentered/opaque"

interface RegularJoe {
  readonly REGULAR_JOE: unique symbol
  type: "RegularJoe"
}

const regularJoeIso = opaque<RegularJoe, UserData & { type: "RegularJoe" }>()

export interface Influencer {
  readonly INFLUENCER: unique symbol
  type: "Influencer"
}

const influencerIso = opaque<RegularJoe, UserData & { type: "Influencer" }>()

export type Viewer = RegularJoe | Influencer

type UserData = {
  id: ViewerId
  email: string
  isInfluencer: boolean
  streetCred: number
}

const getUserProfile = (): Promise<UserData> =>
  Promise.resolve(Fake<UserData>("user_data"))

export const getViewer = (): Promise<BackendErrors | Viewer> =>
  getUserProfile().then(viewerOrError => {
    if (isBackendError(viewerOrError)) {
      return viewerOrError
    }

    if (viewerOrError.isInfluencer && viewerOrError.streetCred > 300)
      return influencerIso.wrap({ type: "Influencer", ...viewerOrError })

    return regularJoeIso.wrap({ type: "RegularJoe", ...viewerOrError })
  })

export const fold = <T extends any>(map: {
  onInfluencer: (viewer: Influencer) => T
  onRegularJoe: (viewer: RegularJoe) => T
}) => (viewer: Viewer): T => {
  switch (viewer.type) {
    case "RegularJoe":
      return map.onRegularJoe(viewer)
    case "Influencer":
      return map.onInfluencer(viewer)
  }
}
