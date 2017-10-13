import { injectable, inject } from 'inversify';
import { ServiceIdentifiers } from '../../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { IObfuscatingReplacer } from '../../../interfaces/node-transformers/obfuscating-transformers/obfuscating-replacers/IObfuscatingReplacer';
import { IOptions } from '../../../interfaces/options/IOptions';

@injectable()
export abstract class AbstractObfuscatingReplacer implements IObfuscatingReplacer {
    /**
     * @type {IOptions}
     */
    protected readonly options: IOptions;

    /**
     * @param {IOptions} options
     */
    constructor (
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        this.options = options;
    }

    /**
     * @param nodeValue
     * @param {number} nodeIdentifier
     * @param {Node} scopeNode
     * @returns {Node}
     */
    public abstract replace (nodeValue: any, nodeIdentifier?: number, scopeNode?: ESTree.Node): ESTree.Node;
}
