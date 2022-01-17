import { BaseResource } from '@gitbeaker/requester-utils';
import type { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { endpoint, RequestHelper } from '../infrastructure';
import type {
  PaginatedRequestOptions,
  Sudo,
  ShowExpanded,
  GitlabAPIResponse,
} from '../infrastructure';

export interface CustomAttributeSchema extends Record<string, unknown> {
  key: string;
  value: string;
}

export class ResourceCustomAttributes<C extends boolean = false> extends BaseResource<C> {
  constructor(resourceType: string, options: BaseResourceOptions<C>) {
    super({ prefixUrl: resourceType, ...options });
  }

  all<E extends boolean = false, P extends 'keyset' | 'offset' = 'offset'>(
    resourceId: string | number,
    options?: PaginatedRequestOptions<E, P>,
  ): Promise<GitlabAPIResponse<CustomAttributeSchema[], C, E, P>> {
    return RequestHelper.get<CustomAttributeSchema[]>()(
      this,
      endpoint`${resourceId}/custom_attributes`,
      options,
    );
  }

  remove<E extends boolean = false>(
    resourceId: string | number,
    customAttributeId: string,
    options?: Sudo & ShowExpanded<E>,
  ): Promise<GitlabAPIResponse<void, C, E, void>> {
    return RequestHelper.del()(
      this,
      endpoint`${resourceId}/custom_attributes/${customAttributeId}`,
      options,
    );
  }

  set<E extends boolean = false>(
    resourceId: string | number,
    customAttributeId: string,
    value: string,
    options?: Sudo & ShowExpanded<E>,
  ): Promise<GitlabAPIResponse<CustomAttributeSchema, C, E, void>> {
    return RequestHelper.put<CustomAttributeSchema>()(
      this,
      endpoint`${resourceId}/custom_attributes/${customAttributeId}`,
      {
        value,
        ...options,
      },
    );
  }

  show<E extends boolean = false>(
    resourceId: string | number,
    customAttributeId: string,
    options?: Sudo & ShowExpanded<E>,
  ): Promise<GitlabAPIResponse<CustomAttributeSchema, C, E, void>> {
    return RequestHelper.get<CustomAttributeSchema>()(
      this,
      endpoint`${resourceId}/custom_attributes/${customAttributeId}`,
      options,
    );
  }
}
