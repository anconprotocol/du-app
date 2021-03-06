/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IMFNFTInterface extends utils.Interface {
  functions: {
    "transfer(address,uint256,uint256)": FunctionFragment;
    "approve(address,uint256,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256,uint256)": FunctionFragment;
    "totalSupply(uint256)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "allowance(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { owner: string; spender: string; tokenId: BigNumber; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { from: string; to: string; tokenId: BigNumber; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IMFNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMFNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    transfer(
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      spender: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(
      who: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allowance(
      owner: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  transfer(
    to: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    spender: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(
    who: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allowance(
    owner: string,
    spender: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    transfer(
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approve(
      spender: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalSupply(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      who: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256,uint256)"(
      owner?: string | null,
      spender?: string | null,
      tokenId?: null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      tokenId?: null,
      value?: null
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    transfer(
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      spender: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      who: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transfer(
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      who: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
