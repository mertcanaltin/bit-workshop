import { Platform } from '@bitdev/platforms.platform';

const UserServer = import.meta.resolve('@bitdev/node.examples.user-server');
const DiscussionServer = import.meta.resolve('@my-org/discussions.discussions-server');
const MyProjectWeb = import.meta.resolve('@my-org/bit-workshop.my-project-web');
const PlatformGateway = import.meta.resolve('@bitdev/symphony.backends.gateway-server');

export const MyProjectPlatform = Platform.from({
  name: 'my-project-platform',

  frontends: {
    // main frontend application for the platform
    main: MyProjectWeb,
  },

  backends: {
    // use the default gateway component. supports proxy of graphql and restful requests.
    main: PlatformGateway,
    services: [
      // compose micro-service components.
      UserServer,
      DiscussionServer
    ]
  },
});

export default MyProjectPlatform;
