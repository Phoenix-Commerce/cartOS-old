import { GraphQLISODateTime } from '@nestjs/graphql';
import { Property, Skip } from 'dryerjs';

const AutoTimestamp = () => {
  return Property({
    output: { type: () => GraphQLISODateTime },
    create: Skip,
    update: Skip,
  });
};

export default AutoTimestamp;
