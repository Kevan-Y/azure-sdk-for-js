/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ElasticPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Metric,
  ElasticPoolsListMetricsOptionalParams,
  MetricDefinition,
  ElasticPoolsListMetricDefinitionsOptionalParams,
  ElasticPool,
  ElasticPoolsListByServerNextOptionalParams,
  ElasticPoolsListByServerOptionalParams,
  ElasticPoolsListMetricsResponse,
  ElasticPoolsListMetricDefinitionsResponse,
  ElasticPoolsListByServerResponse,
  ElasticPoolsGetOptionalParams,
  ElasticPoolsGetResponse,
  ElasticPoolsCreateOrUpdateOptionalParams,
  ElasticPoolsCreateOrUpdateResponse,
  ElasticPoolsDeleteOptionalParams,
  ElasticPoolUpdate,
  ElasticPoolsUpdateOptionalParams,
  ElasticPoolsUpdateResponse,
  ElasticPoolsFailoverOptionalParams,
  ElasticPoolsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ElasticPools operations. */
export class ElasticPoolsImpl implements ElasticPools {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ElasticPools class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMetricsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  public listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMetricDefinitionsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinitions(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ElasticPool> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): AsyncIterableIterator<ElasticPool[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): AsyncIterableIterator<ElasticPool> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): Promise<ElasticPoolsListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, filter, options },
      listMetricsOperationSpec
    );
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  private _listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): Promise<ElasticPoolsListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, options },
      listMetricDefinitionsOperationSpec
    );
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): Promise<ElasticPoolsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Gets an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsGetOptionalParams
  ): Promise<ElasticPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ElasticPoolsCreateOrUpdateResponse>,
      ElasticPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ElasticPoolsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serverName, elasticPoolName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams
  ): Promise<ElasticPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serverName, elasticPoolName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ElasticPoolsUpdateResponse>,
      ElasticPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ElasticPoolsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serverName, elasticPoolName, parameters, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams
  ): Promise<ElasticPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  async beginFailover(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serverName, elasticPoolName, options },
      failoverOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  async beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginFailover(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ElasticPoolsListByServerNextOptionalParams
  ): Promise<ElasticPoolsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.skip, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const failoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/failover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.skip, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
